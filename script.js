// let rootID = document.getElementById("root");

// // console.log(rootID);
// // rootID.innerText = "repetir"

// let mainTag = document.querySelector("main")

// mainTag.innerText = "repetir mais"

// let bodyTag         = document.querySelector("body")

// let spanTag         = document.createElement("span")
// spanTag.innerText = "Preciso repetir"

// bodyTag.appendChild(spanTag);

// let ulTag            = document.createElement("ul");
// let liTag1           = document.createElement("li");
// let liTag2           = document.createElement("li");

// liTag1.innerText = "repetir cada vez mais";
// liTag2.innerText = "repetir cada vez mais";

// ulTag.append(liTag1, liTag2);

// bodyTag.appendChild(ulTag);


////////////////////////////////////////////////////////////
// 💪 Atividade - 🧠 Praticando Objeto Evento

let mainTag = document.querySelector("main")

let ulProdutos      = document.createElement("ul");
let liProduto       = document.createElement("li");

let nomeTag         = document.createElement("p");
let valorTag        = document.createElement("p");
let liquidacaoTag   = document.createElement("p");
let valorPromoTag   = document.createElement("p");
let distribuidor    = document.createElement("p");

nomeTag.innerText       = produto.nome;
valorTag.innerText      = produto.valor.toFixed(2);
liquidacaoTag.innerText = "Em liquidação";
valorPromoTag.innerText = `Hoje apenas: ${(((produto.valor*100)*0.7)/100).toFixed(2)}`;
distribuidor.innerText  = `Fabricante:  ${produto.distribuidor}`;

liProduto.append(nomeTag, valorTag, liquidacaoTag, valorPromoTag, distribuidor);
ulProdutos.appendChild(liProduto);
mainTag.appendChild(ulProdutos);
