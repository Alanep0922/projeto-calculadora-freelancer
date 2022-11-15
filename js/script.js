var inputGanhoPorMes = document.querySelector("#ganho-mes")

var inputHorasPorDia = document.querySelector("#horas-dia")

var spanResposta = document.querySelector("#resposta")

function calcularValorHora() {
    var horasTrabalhadasPorMes = inputHorasPorDia.valueAsNumber * 22
    var valorDaHora = (inputGanhoPorMes.valueAsNumber/ horasTrabalhadasPorMes).toFixed(2)

    spanResposta.innerHTML = "R$" + Math.ceil(valorDaHora) + ",00" 
}


