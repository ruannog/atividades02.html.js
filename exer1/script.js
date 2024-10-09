

const dados = [
    { altura: 1.80, sexo: 'M' },
    { altura: 1.65, sexo: 'F' },
    { altura: 1.75, sexo: 'M' },
    { altura: 1.60, sexo: 'F' },
    { altura: 1.70, sexo: 'M' },
    { altura: 1.55, sexo: 'F' },
    { altura: 1.85, sexo: 'M' },
    { altura: 1.68, sexo: 'F' },
    { altura: 1.90, sexo: 'M' },
    { altura: 1.60, sexo: 'F' },
    { altura: 1.72, sexo: 'M' },
    { altura: 1.58, sexo: 'F' },
    { altura: 1.75, sexo: 'M' },
    { altura: 1.62, sexo: 'F' },
    { altura: 1.80, sexo: 'M' }
];

function calcularDados() {
    let maiorAltura = dados[0].altura;
    let menorAltura = dados[0].altura;
    let somaAlturaMulheres = 0;
    let contadorMulheres = 0;
    let numeroHomens = 0;

    dados.forEach(pessoa => {      if (pessoa.altura > maiorAltura) {
            maiorAltura = pessoa.altura;
        }
        if (pessoa.altura < menorAltura) {
            menorAltura = pessoa.altura;
        }

        if (pessoa.sexo === 'F') {
            somaAlturaMulheres += pessoa.altura;
            contadorMulheres++;
        }

        if (pessoa.sexo === 'M') {
            numeroHomens++;
        }
    });

    const mediaAlturaMulheres = contadorMulheres > 0 ? (somaAlturaMulheres / contadorMulheres).toFixed(2) : 0;

    const resultado = `
        <p><strong>Maior altura do grupo:</strong> ${maiorAltura}m</p>
        <p><strong>Menor altura do grupo:</strong> ${menorAltura}m</p>
        <p><strong>Média de altura das mulheres:</strong> ${mediaAlturaMulheres}m</p>
        <p><strong>Número de homens:</strong> ${numeroHomens}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;
}
