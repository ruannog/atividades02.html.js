
function converterData() {
    const dataEntrada = document.getElementById('data').value;

    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataEntrada)) {
        alert("Por favor, insira a data no formato dd/mm/aaaa.");
        return;
    }

    const [dia, mes, ano] = dataEntrada.split('/');


    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
  
    const mesExtenso = meses[parseInt(mes) - 1];

   
    const resultado = `
        <p><strong>Data por Extenso:</strong> ${dia} de ${mesExtenso} de ${ano}</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}
