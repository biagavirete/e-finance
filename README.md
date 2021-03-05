# Projeto e-Finance

React project using Typescript, Redux, Redux-Saga and Material-UI framework, developed during Campinas Tech Talents bootcamp.
The application allows users to sign up and login, access dashboard, search for different currencies, and also add, delete and list transactions (expenses and income), using a fake API.

* Fake API used: <a href="https://github.com/jenicarvalho/fake-api-financeiro">fake-api-financeiro</a>

<p align="center"><img src="https://github.com/biagavirete/e-finance/blob/master/src/assets/gif2-finance.gif" /></p>

## Getting started

**Installing**
> Cloning the repository

```bash
$ git clone https://github.com/biagavirete/e-finance.git
$ cd e-finance
```

**Running**
> Installing dependencies

```bash
$ yarn
```

> Running React

```bash
$  yarn start
```

**Running fake API**

> Cloning fake API repository:

```bash
$ git clone https://github.com/jenicarvalho/fake-api-financeiro.git
$ cd fake-api-financeiro
```

> Installing dependencies

```bash
$ yarn
```

> Running fake server

```bash
$ json-server db.json -m ./node_modules/json-server-auth -r routes.json --port 4000
```

## Built with

* Typescript
* React
* Redux
* Redux-saga
* Axios
* React-router-dom
* Material-UI
