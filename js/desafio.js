var inputValorHora = document.querySelector("#valor-hora")

var inputHorasProjeto = document.querySelector("#horas-projeto")

var  spanResposta = document.querySelector("#resposta")

function calcularProjeto () {

    var calcularValorProjeto = (inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber)
 spanResposta.innerHTML = "Valor do Projeto : " + "R$" + calcularValorProjeto + ",00"
}