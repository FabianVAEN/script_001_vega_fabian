function applyFizzBuzz(number, fizzDivisor, buzzDivisor) {
    const isFizz = number % fizzDivisor === 0;
    const isBuzz = number % buzzDivisor === 0;
    
    if (isFizz && isBuzz) {
        return 'fizzbuzz';
    } else if (isFizz) {
        return 'fizz';
    } else if (isBuzz) {
        return 'buzz';
    }
    return '';
}

function createDivMatrix(n, container, fizzDivisor, buzzDivisor) {
    container.innerHTML = '';
    let counter = 1;
    
    for (let i = 0; i < n; i++) {
        const row = document.createElement('section');
        row.className = 'demo';
    
        for (let j = 0; j < n; j++) {
            const div = document.createElement('div');
            div.className = 'content';
            
            const className = applyFizzBuzz(counter, fizzDivisor, buzzDivisor);
            
            if (className) {
                div.classList.add(className);
            }
            
            div.textContent = counter;
            row.appendChild(div);
            counter++;
        }
        
        container.appendChild(row);
    }
}

function buttonClicked(){
    console.log("Me hicieron click")

    const dimensionInput = document.getElementById("dimension")
    const fizzInput = document.getElementById("fizz-divisor")
    const buzzInput = document.getElementById("buzz-divisor")

    const dimensionValue = parseInt(dimensionInput.value)
    const fizzValue = parseInt(fizzInput.value)
    const buzzValue = parseInt(buzzInput.value )

    console.log(`El valor de dimension es: ${dimensionValue}`)
    console.log(`El valor de fizz es: ${fizzValue}`)
    console.log(`El valor de buzz es: ${buzzValue}`)

    const matrixContainer = document.getElementById("matrix-container");
    createDivMatrix(dimensionValue, matrixContainer, fizzValue, buzzValue);

}

document.addEventListener('DOMContentLoaded', function() {

    const btnGenerate = document.getElementById("generate")
    
    btnGenerate.addEventListener("click", buttonClicked)
    });

