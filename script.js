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

// let mainTag = document.querySelector("main")

// let ulProdutos      = document.createElement("ul");
// let liProduto       = document.createElement("li");

// let nomeTag         = document.createElement("p");
// let valorTag        = document.createElement("p");
// let liquidacaoTag   = document.createElement("p");
// let valorPromoTag   = document.createElement("p");
// let distribuidor    = document.createElement("p");

// nomeTag.classList.add("nome");
// valorTag.classList.add("valor");
// liquidacaoTag.classList.add("liquidacao");
// valorPromoTag.classList.add("valorPromo");
// distribuidor.classList.add("distribuidor");

// nomeTag.innerText       = produto.nome;
// valorTag.innerText      = produto.valor.toFixed(2);
// liquidacaoTag.innerText = "Em liquidação";
// valorPromoTag.innerText = `Hoje apenas: ${(((produto.valor*100)*0.7)/100).toFixed(2)}`;
// distribuidor.innerText  = `Fabricante:  ${produto.distribuidor}`;

// liProduto.append(nomeTag, valorTag, liquidacaoTag, valorPromoTag, distribuidor);
// ulProdutos.appendChild(liProduto);
// mainTag.appendChild(ulProdutos);

// liProduto.addEventListener('click', function(e) {
//     let targetTag = e.target;
//     if(targetTag.classList[0]=="liquidacao"){  
//         console.log(targetTag.classList[0]);
//         if(valorPromoTag.classList.contains("valorPromo")){
//             valorPromoTag.classList.replace("valorPromo", "valorPromo2");
//         }
//         else{
//             valorPromoTag.classList.replace("valorPromo2", "valorPromo");
//         }
//     }
// });


//////////////////////////////////////////////////
//S7-06| 💪 Atividade: Lista de Tarefas

let mainTag         = document.querySelector("main");

let tarefasTag      = document.createElement("h1");
tarefasTag.innerText= "Tarefas"
mainTag.append(tarefasTag);

let ulListaTarefa   = document.createElement("ul");

for(let i in tasks){
    if(tasks[i].tipo.toLowerCase() === "urgente"){
        let liTarefa        = document.createElement("li");
        liTarefa.innerText  = `${tasks[i].titulo}`;
        let buttonTag       = document.createElement("button")
        buttonTag.innerText = "EXCLUIR"
        liTarefa.appendChild(buttonTag);
        ulListaTarefa.appendChild(liTarefa);
    }
}

for(let i in tasks){
    if(tasks[i].tipo.toLowerCase() === "prioritário"){
        let liTarefa        = document.createElement("li");
        liTarefa.innerText  = `${tasks[i].titulo}`;
        let buttonTag       = document.createElement("button")
        buttonTag.innerText = "EXCLUIR"
        liTarefa.appendChild(buttonTag);
        ulListaTarefa.appendChild(liTarefa);
    }
}

mainTag.appendChild(ulListaTarefa);
