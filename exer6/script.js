
function calcularReajuste() {
    const salario = parseFloat(document.getElementById('salario').value);

    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, insira um salário válido.");
        return;
    }

    let percentualAumento = 0;
    let novoSalario = 0;

    if (salario <= 280) {
        percentualAumento = 20;
    } else if (salario > 280 && salario <= 700) {
        percentualAumento = 15;
    } else if (salario > 700 && salario <= 1500) {
        percentualAumento = 10;
    } else {
        percentualAumento = 5;
    }

    const valorAumento = (salario * percentualAumento) / 100;
    novoSalario = salario + valorAumento;

    const resultado = `
        <p><strong>Salário antes do reajuste:</strong> R$ ${salario.toFixed(2)}</p>
        <p><strong>Percentual de aumento aplicado:</strong> ${percentualAumento}%</p>
        <p><strong>Valor do aumento:</strong> R$ ${valorAumento.toFixed(2)}</p>
        <p><strong>Novo salário após o reajuste:</strong> R$ ${novoSalario.toFixed(2)}</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}
