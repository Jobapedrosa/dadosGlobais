const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    //console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTML =  `Você sabia que o total total de pessoas no mundo é de ${dados.total_pessoas_mundo} de pessoas e que o  total de pessoas com acesso à educação é de ${dados.total_pessoas_com_acesso_a_educacao}? O tempo médio gasto por dia estudando é de ${dados.tempo_medio_dia_estudando} e o total de pessoas com educação superior é de ${dados.total_pessoas_com_educacao_superior}.  Será que esses dados apontam para uma realidade de um mundo esclarecido e com facilidade de acesso à Educação?`
   

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()