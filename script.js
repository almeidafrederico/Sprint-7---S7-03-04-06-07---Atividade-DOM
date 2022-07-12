let rootID = document.getElementById("root");

// console.log(rootID);
// rootID.innerText = "repetir"

let mainTag = document.querySelector("main")

mainTag.innerText = "repetir mais"

let bodyTag         = document.querySelector("body")

let spanTag         = document.createElement("span")
spanTag.innerText = "Preciso repetir"

bodyTag.appendChild(spanTag);

let ulTag           = document.createElement("ul");
let liTag1           = document.createElement("li");
let liTag2           = document.createElement("li");

liTag1.innerText = "repetir cada vez mais";
liTag2.innerText = "repetir cada vez mais";

ulTag.append(liTag1, liTag2);

bodyTag.appendChild(ulTag);