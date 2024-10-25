const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    //console.log(dados)
    
    const pessoasMundo = (dados.total_pessoas_mundo / 1e9)
    const pessoasComAcessoAEducacao = (dados.total_pessoas_com_acesso_a_educacao / 1e9)
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    const pessoasComEducacoSuperior = (dados.total_pessoas_com_educacao_superior / 1e9)
    


    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML =  `Você sabia que o total total de pessoas no mundo é de <span>${pessoasMundo}</span> de pessoas e que o  total de pessoas com acesso à educação é de <span>${pessoasComAcessoAEducacao}</span>? O tempo médio gasto por dia estudando é de <span>${horas} horas </span> e o total de pessoas com educação superior é de <span>${pessoasComEducacoSuperior}</span>.  Será que esses dados apontam para uma realidade de um mundo esclarecido e com facilidade de acesso à Educação?` 
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()