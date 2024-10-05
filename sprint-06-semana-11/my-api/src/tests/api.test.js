const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");
const Registro = require("../models/Registro");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(uri, {});
  }
});

afterEach(async () => {
  await Registro.deleteMany();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("POST /api/registro", () => {
  it("Deve criar um novo registro com sucesso", async () => {
    const payload = {
      url: "https://teste.com",
      name: "teste",
      description: "Lorem ipsum dolor sit amet.",
    };

    const res = await request(app).post("/api/registro").send(payload);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body).toHaveProperty("url", "https://teste.com");
    expect(res.body).toHaveProperty("name", "teste");
    expect(res.body).toHaveProperty(
      "description",
      "Lorem ipsum dolor sit amet."
    );

    const registro = await Registro.findById(res.body._id);
    expect(registro).not.toBeNull();
    expect(registro.url).toBe("https://teste.com");
    expect(registro.name).toBe("teste");
    expect(registro.description).toBe("Lorem ipsum dolor sit amet.");
  });

  it("Deve retornar erro 400 se os campos obrigatórios estiverem ausentes", async () => {
    const payload = {
      url: "",
      name: "",
      description: "",
    };

    const res = await request(app).post("/api/registro").send(payload);

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty(
      "message",
      "Todos os campos são obrigatórios."
    );
  });
});

describe("GET /api/dados", () => {
  it("Deve retornar todos os registros salvos", async () => {
    const registros = [
      {
        url: "https://teste2.com",
        name: "teste 2",
        description: "Excepteur sint occaecat cupidatat non proident.",
      },
      {
        url: "https://teste3.com",
        name: "teste 3",
        description: "Ut enim ad minim veniam.",
      },
    ];
    await Registro.insertMany(registros);

    const res = await request(app).get("/api/dados");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    expect(res.body[0]).toHaveProperty("url", "https://teste2.com");
    expect(res.body[1]).toHaveProperty("name", "teste 3");
  });

  it("Deve retornar uma lista vazia se não houver registros", async () => {
    const res = await request(app).get("/api/dados");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(0);
  });
});
