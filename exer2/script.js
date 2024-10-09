
function criarFormulario() {
    const container = document.getElementById('inputs');
    for (let i = 1; i <= 15; i++) {
        const div = document.createElement('div');
        div.classList.add('input-group');
        
        div.innerHTML = `
            <label for="idade${i}">Idade do espectador ${i}:</label>
            <input type="number" id="idade${i}" name="idade${i}" required>
            
            <label for="opiniao${i}">Opinião do espectador ${i}:</label>
            <select id="opiniao${i}" name="opiniao${i}" required>
                <option value="3">Ótimo</option>
                <option value="2">Bom</option>
                <option value="1">Regular</option>
            </select>
        `;
        container.appendChild(div);
    }
}

function calcularResultados() {
    let somaIdadesOtimo = 0;
    let contadorOtimo = 0;
    let contadorRegular = 0;
    let contadorBom = 0;
    let totalEspectadores = 15;

    for (let i = 1; i <= 15; i++) {
        const idade = parseInt(document.getElementById(`idade${i}`).value);
        const opiniao = parseInt(document.getElementById(`opiniao${i}`).value);

        if (opiniao === 3) {
            somaIdadesOtimo += idade;
            contadorOtimo++;
        } else if (opiniao === 1) {
            contadorRegular++;
        } else if (opiniao === 2) {
            contadorBom++;
        }
    }

    const mediaIdadesOtimo = contadorOtimo > 0 ? (somaIdadesOtimo / contadorOtimo).toFixed(2) : 0;
    const porcentagemBom = ((contadorBom / totalEspectadores) * 100).toFixed(2);

    const resultado = `
        <p><strong>Média das idades das pessoas que responderam 'Ótimo':</strong> ${mediaIdadesOtimo} anos</p>
        <p><strong>Quantidade de pessoas que responderam 'Regular':</strong> ${contadorRegular}</p>
        <p><strong>Porcentagem de pessoas que responderam 'Bom':</strong> ${porcentagemBom}%</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}

window.onload = criarFormulario;
