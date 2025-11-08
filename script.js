console.log("hola mundo soy fabian")

var a = 1
var b = 2
var c = 1+2

console.log("El resultado es:", c)

function addClass(containerDiv, className){
    console.log(containerDiv.classList)
    containerDiv.classList.add(className)
}

document.addEventListener("DOMContentLoaded", function(){
    console.log("Ya se cargo este DOM")
    const containerDivs = document.querySelectorAll(".content")
    console.log(containerDivs)
    for (i = 0; i < containerDivs.length; i++){ 
        addClass(containerDivs[i], "juan")
    }
    containerDivs.forEach((elNombreQueQuieras) => {
        console.log(elNombreQueQuieras)
        addClass(elNombreQueQuieras,"juan")
    })
})