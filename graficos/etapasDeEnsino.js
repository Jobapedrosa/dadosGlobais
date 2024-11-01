async function etapasDeEnsino() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-etapas-de-ensino.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasEscolas = Object.keys(dados)
    const quantidadeEstudantes = Object.values(dados)
    const data = [
      {
        x: nomeDasEscolas,
        y: quantidadeEstudantes,
        type: 'bar'
      }
    ]
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
      
      //console.log(dados)
  }
  etapasDeEnsino()