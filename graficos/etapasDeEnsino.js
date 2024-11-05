import { getCSS, tickConfig } from "./common.js"

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
        type: 'bar',
        marker: {
          color: getCSS('--primary-color')
      }}
     ]
     const layout = {
      plot_bgcolor: getCSS('--bg-color'),
      paper_bgcolor: getCSS('--bg-color'),
      title: {
          text: "Total de Acesso à Educação no mundo",
          x: 0,
          font: {
              color: getCSS('--primary-color'),
              family: getCSS('--font'),
              size: 30,
          }
      },
      xaxis: {
          tickfont: tickConfig,
          title: {
              text: "Nome das Escolas",
              font: {
                  color: getCSS('--secundary-color')
              }
          }
      },
      yaxis: {
          tickfont: tickConfig,
          title: {
              text: "Bilhoes de Estudantes Ativos",
              font: {
                  color: getCSS('--secundary-color')
              }
          }
      }
  }
  
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
      
      //console.log(dados)
  }
  etapasDeEnsino()