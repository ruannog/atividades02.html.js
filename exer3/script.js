
function criarFormulario() {
    const container = document.getElementById('inputs');
    for (let i = 1; i <= 10; i++) {
        const div = document.createElement('div');
        div.classList.add('input-group');
        
        div.innerHTML = `
            <label for="numero${i}">Número ${i}:</label>
            <input type="number" id="numero${i}" name="numero${i}" required>
        `;
        container.appendChild(div);
    }
}


function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function calcularSomas() {
    let somaPares = 0;
    let somaPrimos = 0;

    for (let i = 1; i <= 10; i++) {
        const numero = parseInt(document.getElementById(`numero${i}`).value);

  
        if (numero % 2 === 0) {
            somaPares += numero;
        }


        if (ehPrimo(numero)) {
            somaPrimos += numero;
        }
    }

 
    const resultado = `
        <p><strong>Soma dos números pares:</strong> ${somaPares}</p>
        <p><strong>Soma dos números primos:</strong> ${somaPrimos}</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}

window.onload = criarFormulario;
