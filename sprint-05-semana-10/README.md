# Sprint 05 - Semana 10

## Criar uma API Simples com Node.js, Express e MongoDB

### Objetivo
Desenvolver uma API simples que receba dados, registre-os no banco de dados MongoDB e exponha endpoints para buscar todos os registros, com uma opção adicional para buscar de forma paginada.

### Requisitos:

1. **Tecnologias a Utilizar:**
   - Node.js: Para o backend da API.
   - Express: Framework para construir a API REST.
   - MongoDB: Banco de dados para armazenar os registros.

2. **Estrutura dos Dados:**
   - id: Identificador único gerado pelo MongoDB.
   - url: URL associada ao registro.
   - nome: Nome do registro.
   - descricao: Descrição detalhada do registro.

3. **Endpoints Necessários:**
   - POST /registro: Recebe o payload com url, nome e descricao, e salva no banco de dados.
   - GET /dados: Retorna todos os registros salvos no MongoDB.
