
function calcularOperacoes() {

    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

  
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

 
    const soma = numero1 + numero2;
    const produto = numero1 * numero2;
    const divisao = numero2 !== 0 ? (numero1 / numero2).toFixed(2) : 'Divisão por zero';
    const restoDivisao = numero2 !== 0 ? numero1 % numero2 : 'Indefinido';

   
    const tabela = `
        <table>
            <tr>
                <th>Operação</th>
                <th>Resultado</th>
            </tr>
            <tr>
                <td>Soma</td>
                <td>${soma}</td>
            </tr>
            <tr>
                <td>Produto</td>
                <td>${produto}</td>
            </tr>
            <tr>
                <td>Divisão</td>
                <td>${divisao}</td>
            </tr>
            <tr>
                <td>Resto da Divisão</td>
                <td>${restoDivisao}</td>
            </tr>
        </table>
    `;

    document.getElementById('resultado').innerHTML = tabela;
}
