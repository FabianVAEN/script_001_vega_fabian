function addClass(containerDiv, className){
    console.log(containerDiv.classList)
    containerDiv.classList.add(className)
}

function createMatrix(dimension, container,divisorFizz,divisorBuzz){
    let counter = 1

    for (let i = 0; i<dimension; i++){
        const div= document.createElement("div")
        addClass(div,"demo")
        for (let j=0; j<dimension; j++){
            const content = document.createElement("div")
            addClass(content,"content")
            fizz(divisorFizz,content, counter)
            buzz(divisorBuzz,content, counter)
            content.textContent = counter 
            div.appendChild(content)
            counter++
        }
        container.appendChild(div)
    }
}

function buzz(divisor, square, number){
    if(number%divisor == 0){
        addClass(square, "buzz", 3)
    }
}

function fizz(divisor, square, number){
    if(number%divisor == 0){
        addClass(square, "fizz", 2)
    }
}


document.addEventListener("DOMContentLoaded", function(){
    console.log("Ya se cargo este DOM")
    const container = document.querySelector(".container")
    createMatrix(5,container,2,3)
})

