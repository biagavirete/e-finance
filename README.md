# Projeto e-Finance

Projeto React utilizando Typescript, Redux, Redux-Saga e Material-UI desenvolvido na trilha React do Campinas Tech Talents.
A aplicação permite realizar cadastro e login de usuário, acessar dashboard, pesquisar por moedas, além de cadastrar, excluir e listar transações (despesas e recebimentos), utilizando uma API fake.

* API fake utilizada: <a href="https://github.com/jenicarvalho/fake-api-financeiro">fake-api-financeiro</a>

<img src="https://github.com/biagavirete/e-finance/blob/master/src/assets/efinance_signup.png" width="50%" />

## Como usar

**Para instalar**
> Clonar o repositório

```bash
$ git clone https://github.com/biagavirete/e-finance.git
$ cd e-finance
```

**Para rodar**
> Instalar dependências

```bash
$ yarn
```

> Iniciar o React

```bash
$  yarn start
```

**Utilizando a API fake**

> Clonar o repositório com a API fake

```bash
$ git clone https://github.com/jenicarvalho/fake-api-financeiro.git
$ cd fake-api-emporio
```

> Instalar dependências

```bash
$ yarn
```

> Iniciando o servidor fake

```bash
$ json-server db.json -m ./node_modules/json-server-auth -r routes.json --port 4000
```

## Desenvolvido com

* Typescript
* React
* Redux
* Redux-saga
* Axios
* React-router-dom
* Material-UI
