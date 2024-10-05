# Sprint 06 - Semana 11

## Escrever Testes para a API Desenvolvida

### Objetivo
Desenvolver testes para a API criada na semana anterior. O objetivo é garantir que os endpoints estejam funcionando corretamente, tanto em termos de lógica quanto de integração com o banco de dados. Vocês deverão escrever testes unitários e de integração para cobrir os endpoints da API.

### Requisitos:

1. **Testes a serem realizados:**
   - POST /registro: Verificar se o payload (com url, nome, e descricao) é recebido corretamente e se o registro é salvo no MongoDB.
     
   - GET /dados: Validar se todos os registros são retornados corretamente. Pode ser implementado um teste de integração, validando a comunicação com o banco de dados.
