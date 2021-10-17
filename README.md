<p align="center">
  <img src="https://github.com/jonatanreseck/e-diarista/tree/main/resources/logo.svg" alt="logo" height="50"/>
</p>

<h1 align="center">
    🚀 E-diaristas
</h1>

<p align="center">Aplicação desenvolvida durante a semana Multi Stack</p>

<p align="center">
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pré-requisitos">Pré-Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Lincença</a>
</p>

<h3 align="center"> 
🚧  Finalizado  🚧
</h3>

### 📎 Features

- [x] Pesquisar por diaristas cadastradas
- [x] Cadastrar diaristas
- [x] Editar diaristas
- [x] Consulta automática por CEP usando GPS

### 💻 Projeto

E-diaristas é uma aplicação que lista as diaristas que estão perto de você. Projeto desenvolvida durante evento Multi Stack 2ª Edição.

### ✅ Demonstração

<img src="https://github.com/jonatanreseck/e-diarista/tree/main/resources/app.png" />

### ⚙ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e/ou [Yarn](https://https://yarnpkg.com/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

- Também, precisará ter instalado o [Java](https://openjdk.java.net/install/)

### 📙 Rodando o Backend

```bash
# Clone este repositório
$ git clone https://github.com/jonatanreseck/e-diarista

# Navegue para a pasta
$ cd backend

# Rode as migrations
$ php artisan migrate

# Execute a aplicação
$ php artisan serve
```

### 📗 Rodando o Frontend (web)

```bash
# Navegue para a pasta
$ cd web

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn dev

# Execute a aplicação de prd
* yarn build && yarn start
```

### 📘 Rodando o Mobile

```bash
# Navegue para a pasta
$ cd mobile

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start
```

### 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- NextJS
- React Native
- Laravel
- Typescript
- SqLite3

### 📕 Bibliotecas

Esse projeto foi utilizou das seguintes lib:

- axios
- react-input-mask
- react-icons
- material-ui
- emotion

### 📝 Licença

Esse projeto está sob a licença MIT.

<hr/>
