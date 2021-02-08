//experiências acadêmicas

const form_Educacional = [{descricao: "- Ensino Superior: Engenharia de produção => Centro Universitário da FEI. Formação: Dez/2015."},
{descricao: "- Ensino Técnico: Mecatrônica => ETE Lauro Gomes – São Bernardo do Campo – SP. Formado em Jul/2009."},
{descricao: "- Inglês Avançado => Cursado no Access Internacional School e English Live."}]


//qualificações
const qualificacoes = [{
descricao: " Conhecimentos nas linguagens html, css e javascript (aulas praticadas na udemy de 2020 até 2021)"},
{descricao:" Conhecimentos básicos na biblioteca React js e do framework Node js (aulas praticadas na udemy de 2020 até 2021)",
subdescricao:  ["     - Utilização de frameworks como express, handlebars para fazer conexões com servidores, banco de dados e renderizações de páginas na web (2020)", 
"- Utilização do Mongodb CRUD operations para armazenar, selecionar, deletar e atualizar dados,","      •Utilização de outros frameworks para outras praticas como validação de dados,  upload e download de arquivos, encriptação de senhas."]},
{descricao: " Conhecimento básico na linguagem Python (aulas praticadas na udacity em 2017)"},
{descricao: " Conhecimento básico/intermediário na linguagem C# (2017 - 2019)", subdescricao: ["- Cursado durante 3 semestres na faculdade termomecânica (introdução ao básico, funções, métodos, Windows forms, programação orientada a objetos e estrutura de dados)."]},
{descricao: " Conhecimentos em versionamento de código com git/github (2020);"},
{descricao: " Introdução a Programação orientada a objetos durante 1 semestre na faculdade termomecânica (2018)"},
{descricao: " Introdução ao uso de banco de dados SQL Server durante 1 semestre na faculdade termomecânica (2019)."}]


//experiências profissionais
const exp_Profissionais = 
[
    {
        descricao: 'Hulcar Veículos (Empreendimento de comércio de carros da família). De Fev/2017 até hoje.',
        subdescricao:["- Vivência na gestão do negócio, compra de carros usados, vendas e atendimento ao cliente fisicamente ou virtualmente."]
    },
    {
        descricao: "Vigor Alimentos – São Paulo. Área: Qualidade Corporativa. De Fev/2015 até Nov/2016.",
        subdescricao:
        [
            "- Desenvolvimento de estudos de viabilidade focado na obtenção de redução de custos e ganhos de eficiência.",
            "- Homologação documental dos fornecedores.",
            "- Vivência com processamento de leite e derivados."
        ]
    },
    {
        descricao: "Faurecia automotive exteriors – São Bernardo do Campo. Área: Desenvolvimento de produto. De Dez/2012 até Dez/2014.",
        subdescricao: 
        [
            "- Vivência nos processos de injeção, pintura automotiva e montagem em dispositivos de manufatura.",
            "- Acompanhamento técnico no desenvolvimento do produto (Análise Dimensional, química e montagem)."
        ]
    },
    {
        descricao: "Produflex Ind. Borrachas Ltda – Diadema. Área: Engenharia de Qualidade. De Mar/2011 até Nov/2012.",
        subdescricao: 
        [
            "- Acompanhamento de processos, revisões e criações de especificações de processo via sistema.",
            "- Atuação nos controles de equipamentos de medições da empresa,colaborando na precisão dos processos realizados."
        ]
    }
]

function criarElemento(classe, descricao) 
{
    const elemento = document.createElement('div')
    elemento.className = classe
    elemento.innerHTML = descricao
    return elemento
}

function inserirTopico(descTitulo, descricoes, classeDescricao) 
{
    const topico = document.createElement('div')
    topico.className = 'topico'

    topico.appendChild(criarElemento('titulo', descTitulo))

    for (let i = 0; i < descricoes.length; i++)
    {
        topico.appendChild(criarElemento(classeDescricao, descricoes[i].descricao))

        if(descricoes[i].subdescricao)
        {
            descricoes[i].subdescricao.forEach(s => {
                topico.appendChild(criarElemento('subdescricao', s))
            })
        }   
    }
    return topico
}


const box = document.querySelector(".box3")

box.appendChild(inserirTopico('Formação Educacional', form_Educacional, 'descricao_formacao'))
box.appendChild(inserirTopico('Qualificações', qualificacoes, 'descricao_qualificacoes'))
box.appendChild(inserirTopico('Experiências Profissionais', exp_Profissionais, 'descricao_exp_Empresa'))



