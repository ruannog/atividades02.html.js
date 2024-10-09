
function criarFormulario() {
    const container = document.getElementById('inputs');
    for (let i = 1; i <= 10; i++) {
        const div = document.createElement('div');
        div.classList.add('input-group');
        
        div.innerHTML = `
            <label for="idade${i}">Idade da pessoa ${i}:</label>
            <input type="number" id="idade${i}" name="idade${i}" required>
            
            <label for="peso${i}">Peso da pessoa ${i} (kg):</label>
            <input type="number" id="peso${i}" name="peso${i}" required>
            
            <label for="sexo${i}">Sexo da pessoa ${i}:</label>
            <select id="sexo${i}" name="sexo${i}" required>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
            </select>
        `;
        container.appendChild(div);
    }
}


function calcularEstatisticas() {
    let totalHomens = 0;
    let totalMulheres = 0;
    let somaIdadesHomens = 0;
    let somaPesosMulheres = 0;
    let contadorHomens = 0;
    let contadorMulheres = 0;

    for (let i = 1; i <= 10; i++) {
        const idade = parseInt(document.getElementById(`idade${i}`).value);
        const peso = parseFloat(document.getElementById(`peso${i}`).value);
        const sexo = document.getElementById(`sexo${i}`).value;

        if (sexo === 'M') {
            totalHomens++;
            somaIdadesHomens += idade;
            contadorHomens++;
        } else if (sexo === 'F') {
            totalMulheres++;
            somaPesosMulheres += peso;
            contadorMulheres++;
        }
    }

    const mediaIdadesHomens = contadorHomens > 0 ? (somaIdadesHomens / contadorHomens).toFixed(2) : 0;
    const mediaPesosMulheres = contadorMulheres > 0 ? (somaPesosMulheres / contadorMulheres).toFixed(2) : 0;


    const resultado = `
        <p><strong>Total de Homens:</strong> ${totalHomens}</p>
        <p><strong>Total de Mulheres:</strong> ${totalMulheres}</p>
        <p><strong>Média das Idades dos Homens:</strong> ${mediaIdadesHomens} anos</p>
        <p><strong>Média dos Pesos das Mulheres:</strong> ${mediaPesosMulheres} kg</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}

window.onload = criarFormulario;
