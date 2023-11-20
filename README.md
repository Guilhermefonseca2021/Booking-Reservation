# Site para Hoteis, Agendamentos.

<a style="text-align: center">   
  <a href="#🛠️-tecnologias"> Tecnologias </a> / 
  <a href="#pré-requisitos"> Pre-requisitos </a> / 
  <a href="#🎲-rodando-front-end"> rodar aplicacao </a> / 
  <a href="#contribuição"> Licenca do MIT </a> / 
</p>

## features

- [x] Estados de entrada do usuario
- [x] Validacao de campos
- [x] Components
- [x] Reutilizacao de components
  - [x] Heranca
  - [x] Rendericao de partes
- [x] Clean code

<img width="1567" alt="-booking-presets-" src="https://github.com/Guilhermefonseca2021/Kafene/assets/92196697/a3558e6c-2081-46b7-b25b-2c0785fc24be">

## Descrição do Projeto

Este projeto consiste em um site de agendamento para hoteis e venda de serviços, onde os usuários podem encontrar e entrar contatos com hoteis, hostels, kitnets para contratar seus serviços de estadia.

## 🛠️ Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [React](https://pt-br.react.org/)
  <!-- - [Node.js](https://nodejs.org/en/) -->
  <!-- - [Prisma](https://www.prisma.io/) -->

## Pré-requisitos

antes de comecar voce precisa ter instalado as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Alem disso é om ter um editor de codigo para trabalhar com o codigo como [VSCode](https://code.visualstudio.com/)

## 🎲 Rodando Front-end

```js
// Clone o repositório para o seu ambiente de desenvolvimento local.
$  git clone https://github.com/Guilhermefonseca2021/Booking-Reservation.git

// abra a pasta
$  cd front end

// instale as dependencias
$  npm install

// Execute o servidor para que o site possa se comunicar com o backend.
$  npm run dev
```

<a href="">Testar aplicacao agora. </a>

made with 💜 by GUILHERME FONSECA 👋 [See my linked-in](www.linkedin.com/in/guilherme-fonseca-dos-santos-a49594207)

## Insigths

metodo function carregando objetos nome e metodo
```js
<button
disabled={options.adult <= 1} 
  onCLick={
    () => handleOption("crianca", "i")
  }
/>
// e trabalhando com base em objetos mudar estado:

const [criancas, stCriancas] = useState({
  crianca: 0,
})

setCriancas((prevState) => {
return {
  ...prevState,
    [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
  };
});
```

## Contribuição

Contribuições são bem-vindas! Se você tiver alguma sugestão, correção de bugs ou melhorias para o projeto, fique à vontade para abrir uma issue ou um pull request.
