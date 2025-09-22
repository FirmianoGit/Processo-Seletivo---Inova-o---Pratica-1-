
# Sistema de Reserva de Salas

Projeto desenvolvido em NestJS para gerenciamento de reservas de salas, usuários e autenticação JWT. O sistema permite o cadastro de usuários, autenticação, criação e atualização de salas, além de reservas, utilizando banco de dados SQLite.

## Funcionalidades

- **Autenticação JWT**: Login seguro e rotas protegidas por guards.
- **Cadastro de Usuários**: Criação, listagem e atualização de usuários.
- **Gerenciamento de Salas**: CRUD de salas (criar, listar, atualizar, remover).
- **Reservas**: Criação de reservas de salas por usuários.
- **Validações**: Uso de DTOs para validação de dados de entrada.

## Estrutura do Projeto

```
src/
  app.controller.ts
  app.module.ts
  app.service.ts
  main.ts
  auth/                # Módulo de autenticação (JWT, guards, strategies)
  Common/              # Modelos, decorators e utilitários
  Database/            # Módulo de banco de dados, entidades e providers
  rooms/               # Módulo de salas (CRUD)
  user/                # Módulo de usuários (CRUD)
test/                  # Testes e2e
database.sqlite        # Banco de dados SQLite
```

## Instalação

```bash
npm install
```

## Executando a Aplicação

```bash
# Desenvolvimento
npm run start

# Modo watch
npm run start:dev

# Produção
npm run start:prod
```

## Testes

```bash
# Testes unitários
npm run test

# Testes end-to-end
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) (TypeScript)
- [SQLite](https://www.sqlite.org/index.html)
- [JWT](https://jwt.io/)

## Observações

- O banco de dados utilizado é SQLite e já está incluído no repositório (`database.sqlite`).
- As entidades e DTOs estão organizados em suas respectivas pastas.
- O sistema utiliza guards e decorators customizados para controle de acesso.

## Autor

Desenvolvido para processo seletivo.

---
MIT License
