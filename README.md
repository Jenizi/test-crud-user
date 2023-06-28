registration-system

# Sistema de cadastro de usuários

`git clone -b main` [linkrepositorio]("https://github.com/Jenizi/test-crud-user.git") (clonar o repositório a partir da branch main)

## Comandos para iniciar o frontend:

`npm i` (instalação das dependências)
`npm start `(comando para rodar o client)

## Comandos para iniciar o backend:

`npm i` (instalação das dependências)
(configure o arquivo .env de acordo com o .env.example, adicionando login, senha e nome da tabela)
`npx prisma migrate dev` (migrações para criação das tabelas no bd, informando nome da migração ex: user)
`npm run server` (comando para rodar o servidor local)
