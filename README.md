# Sistema de cadastro de usuários

Para iniciar é necessário possuir o postgreSQL instalado e configurado com login e senha.

No (terminal/cmd) em uma pasta de sua preferência:

- `git clone -b main` ["https://github.com/Jenizi/test-crud-user.git"]
- (clonar o repositório a partir da branch main)

## Comandos para iniciar o backend:

- (na raíz do projeto /test-crud-user)
- (cd server)
- `npm i` (instalação das dependências)
- (crie o arquivo .env na raíz de acordo com o .env.example, adicionando login, senha e nome da tabela)
- `npx prisma migrate dev` (migrações para criação das tabelas no bd, informando nome da migração ex: user)
- `npm run server` (comando para rodar o servidor local)

## Comandos para iniciar o frontend:

- (na raíz do projeto /test-crud-user)
- (cd client)
- `npm i` (instalação das dependências)
- `npm start `(comando para rodar o client)
