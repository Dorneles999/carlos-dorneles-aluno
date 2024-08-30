import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { email } = req.body;

    //verifica se o usuario ja existe
    let user = await User.findOne({ email });

    //se nao existe, cria o novo usuario
    if (!user) {
      user = await User.create({ email });
    }

    //retorna os dados do usuario
    return res.json(user);
  }
}

export default new SessionController();
