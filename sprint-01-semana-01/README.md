# Observações Gerais

- Siga o seguinte padrão para o nome do repositório: `primeiroNome-sobreNome-estudos`. 
  - Exemplo: `edmar-gabriel-estudos`
- Tenha zelo por esse repositório e mantenha-o privado, pois ele te acompanhará em toda sua jornada de estudo. .
- Adicione **Edmar** como colaborador. Em breve, será solicitado para adicionar os outros instrutores. 
  - Email: `edmarmiller@hotmail.com`

## Estrutura de Diretórios

Crie um diretório para cada semana, até a semana 12, seguindo o padrão abaixo:

- `sprint-01-semana-01`
  - `README.md`
  - `outra-pasta-qualquer`

- `sprint-01-semana-02`
  - `README.md`
  - `outra-pasta-qualquer`

## Entregável da Semana 1

1. **Instalação e Configuração do Git**
2. **Criação de um Repositório Local**
3. **Adição de Arquivos e Commit**
   - Crie um arquivo `README.md`
4. **Criação de uma Conta no GitHub e Repositório Remoto**
   - Crie uma conta no GitHub, crie um novo repositório e adicione-o como remoto ao repositório local.
5. **Push do Repositório Local para o GitHub**
   - Envie os commits locais para o repositório remoto no GitHub.
6. **Criação e Mudança de Branches**
   - Crie uma nova branch e mude para ela.
   - Adicione este documento ao `README.md`.
7. **Merge de Branches**
   - Faça merge de uma branch de desenvolvimento com a branch principal.
8. **Configuração de um Arquivo README**
   - Adicione uma seção ao `README.md` com uma lista dos principais comandos do Git aprendidos.
9. **Criação de um Pull Request**
   - Faça alterações em uma branch, envie para o repositório remoto e abra um pull request no GitHub.
10. **Revisão de Código e Merge de Pull Request**
    - Revise um pull request, aprove ou solicite mudanças, e faça o merge na branch principal.

# Semana 1 - Comandos Git

Esta lista contém os comandos Git aprendidos.

---

- `git config --global user.name "Seu Nome"`: Configura o nome de usuário.
- `git config --global user.email "seu-email@example.com"`: Configura o email.
- `git init`: Inicializa um novo repositório Git.
- `git status`: Verifica o status dos arquivos no repositório.
- `git log`: Exibe o histórico de commits.
- `git log --oneline`: Mostra o histórico de commits com uma visualização mais compacta.
- `git add <arquivo>`: Adiciona um arquivo específico.
- `git add .`: Adiciona todos os arquivos modificados.
- `git commit -m "Mensagem do commit"`: Faz o commit das alterações.
- `git revert HEAD`: Reverte para o commit mais recente.
- `git checkout -- <arquivo>`: Desfaz alterações antes de fazer o commit.
- `git branch <nome-da-branch>`: Cria uma nova branch.
- `git branch -D <nome-da-branch>`: Deleta uma branch local.
- `git push origin --delete <nome-da-branch>`: Deleta uma branch do repositório remoto.
- `git checkout <nome-da-branch>`: Troca para uma branch existente.
- `git checkout -b <nome-da-branch>`: Cria uma nova branch e troca para ela.
- `git merge <nome-da-branch>`: Mescla uma branch na branch atual.
- `git rebase <nome-da-branch>`: Rebase de uma branch na branch atual.
- `git remote add origin <url-do-repositorio>`: Adiciona um repositório remoto.
- `git push origin <nome-da-branch>`: Envia mudanças do repositório local para o repositório remoto.
- `git pull origin <nome-da-branch>`: Atualiza o repositório local com mudanças do remoto.
- `git tag -a <nome-da-tag> -m "Mensagem da tag"`: Cria uma nova tag anotada.
