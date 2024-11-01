async function etapasDeEnsino() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-etapas-de-ensino.json'
    const res = await fetch(url)
    const dados = await res.json()
      
      console.log(dados)
  }
  etapasDeEnsino()