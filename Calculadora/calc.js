function inserir(num){
    const resul = document.querySelector("#Resultado")
    resul.innerHTML +=  num
}

function limpar(){
    const resul = document.querySelector("#Resultado")
    resul.innerHTML = ""
}

function voltar(){
    const resul = document.querySelector("#Resultado").innerHTML
    window.document.querySelector("#Resultado").innerHTML = resul.substring(0, resul.length-1)
}

function resultados(){
    const resul = document.querySelector("#Resultado").innerHTML
    if(resul)
    {
        document.querySelector("#Resultado").innerHTML = eval(resul)
    }
    else
    {
        document.querySelector("#Resultado").innerHTML = "Nada Para Calcular"
    }
}