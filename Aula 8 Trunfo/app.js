var carta1 = {
  nome: "Bulbasauro",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  atributos: {
    ataque: 5,
    defesa: 6,
    poder: 6,
  },
};
var carta2 = {
  nome: "Charmander",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  atributos: {
    ataque: 7,
    defesa: 4,
    poder: 5,
  },
};
var carta3 = {
  nome: "Pikachu",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  atributos: {
    ataque: 6,
    defesa: 5,
    poder: 8,
  },
};
var carta4 = {
  nome: "Squirtle",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  atributos: {
    ataque: 3,
    defesa: 4,
    poder: 7,
  },
};
var carta5 = {
  nome: "Butterfree",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
  atributos: {
    ataque: 3,
    defesa: 3,
    poder: 7,
  },
};
var carta6 = {
  nome: "Weedle",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
  atributos: {
    ataque: 3,
    defesa: 2,
    poder: 4,
  },
};
var carta7 = {
  nome: "Pidgey",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
  atributos: {
    ataque: 3,
    defesa: 3,
    poder: 5,
  },
};
var carta8 = {
  nome: "Rattata",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
  atributos: {
    ataque: 4,
    defesa: 3,
    poder: 6,
  },
};
var carta9 = {
  nome: "Ekans",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
  atributos: {
    ataque: 5,
    defesa: 3,
    poder: 7,
  },
};
var carta10 = {
  nome: "Jigglypuff",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
  atributos: {
    ataque: 3,
    defesa: 2,
    poder: 4,
  },
};
var carta11 = {
  nome: "Zubat",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
  atributos: {
    ataque: 2,
    defesa: 2,
    poder: 4,
  },
};
var carta12 = {
  nome: "Meowth",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
  atributos: {
    ataque: 2,
    defesa: 3,
    poder: 3,
  },
};
var carta13 = {
  nome: "Psyduck",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
  atributos: {
    ataque: 4,
    defesa: 3,
    poder: 5,
  },
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12,
  carta13,
];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributosSelecionados() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}
function jogar() {
  var atributosSelecionados = obtemAtributosSelecionados();
  var divResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributosSelecionados];
  var valorCartaMaquina = cartaMaquina.atributos[atributosSelecionados];

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class = 'resultado-final'>Venceu</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = "<p class = 'resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class = 'resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id = 'opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributos in cartaJogador.atributos) {
    opcoesTexto += opcoesTexto =
      "<input type= 'radio' name = 'atributo' value ='" +
      atributos +
      "'>" +
      atributos +
      " " +
      cartaJogador.atributos[atributos] +
      "<br>";
  }
  var nome = `<p class= "carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id = 'opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributos in cartaMaquina.atributos) {
    opcoesTexto += opcoesTexto =
      "<p type= 'text' name = 'atributo' value ='" +
      atributos +
      "'>" +
      atributos +
      " " +
      cartaMaquina.atributos[atributos] +
      "</p>";
  }
  var nome = `<p class= "carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
