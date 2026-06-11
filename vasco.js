const tema = document.getElementById("tema");

if(localStorage.getItem("tema") === "claro"){

    document.body.classList.add("claro");

    tema.textContent = "☀️ Modo Claro";

}

tema.addEventListener("click", () => {

    document.body.classList.toggle("claro");

    if(document.body.classList.contains("claro")){

        tema.textContent = "☀️ Modo Claro";

        localStorage.setItem("tema", "claro");

    }else{

        tema.textContent = "🌙 Modo Escuro";

        localStorage.setItem("tema", "escuro");

    }

});


const numero = document.getElementById("numero");

let atual = 0;

const alvo = 30;

const contador = setInterval(() => {

    atual++;

    numero.textContent = atual;

    if(atual >= alvo){

        clearInterval(contador);

    }

}, 50);
