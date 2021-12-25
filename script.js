let tituloEscrito = document.getElementById("title_typed");
let textDigitado = document.getElementById("texto_typed");
//
let titulo = document.getElementById("title");
let texto = document.getElementById("text");

//titulo
let corT = document.getElementById("colorT");
let upT = document.getElementById("upperT");
let lowerT = document.getElementById("lowerT");
let captalizaedT = document.getElementById("CaptalizeT")
//texto
let corTT = document.getElementById("colorTT");
let upTT = document.getElementById("upperTT");
let lowerTT = document.getElementById("lowerTT");
let captalizaedTT = document.getElementById("CaptalizeTT")

//ataliza titulo e texto
function digitar_titulo(){
    tituloEscrito.innerText = titulo.value;
}
function digitar_texto(){
    textDigitado.innerText = texto.value;
}
//FIM ataliza titulo e texto


function mudarcor(){
    tituloEscrito.style.color = corT.value;
    textDigitado.style.color = corTT.value;
}
function upper(n){
    if (n == 1){
        tituloEscrito.innerText = tituloEscrito.innerText.toUpperCase();
    }
    else{
        textDigitado.innerText = textDigitado.innerText.toUpperCase();
    }
}

function lower(n){
    if (n == 1){
        tituloEscrito.innerText = tituloEscrito.innerText.toLowerCase();
    }
    else{
        textDigitado.innerText = textDigitado.innerText.toLowerCase();
    }
}
function captalize(n){
    function cap(str){
        let arry = str.trim().split(" ");
        if (arry.length == 1 ){
            return (`${arry[0].slice(0, 1).toUpperCase()}`+`${arry[0].slice(1).toLowerCase()}`);
        }
        else{
            var string = "";
            for(var i = 0; i < arry.length; i++){
                string += `${arry[i].slice(0, 1).toUpperCase()}`+`${arry[i].slice(1).toLowerCase()}`;
                string+= " ";
            }
            return string;
        }
    }
    if (n == 1){
        tituloEscrito.innerText = cap(tituloEscrito.innerText);
    }
    else{
        textDigitado.innerText = cap(textDigitado.innerText);
    }
}


titulo.addEventListener("input", digitar_titulo);//atualiza o titulo
texto.addEventListener("input", digitar_texto);//atualiza o texto

corT.addEventListener("focusout", mudarcor);//titulo
corTT.addEventListener("focusout", mudarcor);//text
