WaProject Api Base
==================

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/6f088e0cd30769029046)

Utilize o VSCode, já está configurado com sugestão de extensões e debug.

### Tecnologias

* Node/Typescript
* NestJs (Framework)
* Docker
* Objection (ORM) / Knex (Query builder e migrations)
* Mailgun (envio de email)
* AWS (envio de email/s3)
* JWT (tokens)
* Bcrypt (criptografia para senhas)
* Sentry.io (log de erros)
* Pug (templates de email)

### Iniciando um novo projeto

```bash
# install docker https://docs.docker.com/install

# Clone o repositório
$ git clone git@github.com:KaiqueCovo/waproject-api.git

# Instalando dependências
$ yarn install
# Caso você prefira o NPM
$ npm install

# levantará o docker com o banco de dados e a aplicação.
# Ele aplicará as migrations/seeds do banco e depois dará watch nos arquivos
# e iniciará o node com a api
$ [sudo] docker-componse up
```

### Para mais informações veja a pasta ./docs