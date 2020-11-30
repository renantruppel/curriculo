const form_Educacional = ["- Ensino Superior: Engenharia de produção => Centro Universitário da FEI. Formação: Dez/2015.",
"- Ensino Técnico: Mecatrônica => ETE Lauro Gomes – São Bernardo do Campo – SP. Formado em Jul/2009.",
"- Inglês Avançado => Cursado no Access Internacional School e English Live."]


const qualificacoes = ["- Conhecimentos nas linguagens html, css e javascript (aulas praticadas na udemy)",
"- Conhecimentos da biblioteca React js e da plataforma Node js (aulas praticadas na udemy)",
"- Conhecimento básico na linguagem Python (aulas praticadas na udacity)",
"- Conhecimento básico/intermediário na linguagem C# => Cursado durante 3 semestres na faculdade termomecânica (introdução ao básico, funções, métodos, Windows forms, programação orientada a objetos e estrutura de dados).",
"- Introdução a Programação orientada a objetos => Durante 1 semestre na faculdade termomecânica.",
"- Introdução ao uso de banco de dados SQL Server => Durante 1 semestre na faculdade termomecânica."]

const exp_Profissionais = 
[
    {
        exp_Empresa: 'Hulcar Veículos (Empreendimento de comércio de carros da família). De Fev/2017 até hoje.',
        descricao:["- Vivência na gestão do negócio, compra de carros usados, vendas e atendimento ao cliente fisicamente ou virtualmente."]
    },
    {
        exp_Empresa: "Vigor Alimentos – São Paulo. Área: Qualidade Corporativa. De Fev/2015 até Nov/2016.",
        descricao:
        [
            "- Desenvolvimento de estudos de viabilidade focado na obtenção de redução de custos e ganhos de eficiência.",
            "- Homologação documental dos fornecedores.",
            "- Vivência com processamento de leite e derivados."
        ]
    },
    {
        exp_Empresa: "Faurecia automotive exteriors – São Bernardo do Campo. Área: Desenvolvimento de produto. De Dez/2012 até Dez/2014.",
        descricao: 
        [
            "- Vivência nos processos de injeção, pintura automotiva e montagem em dispositivos de manufatura.",
            "- Acompanhamento técnico no desenvolvimento do produto (Análise Dimensional, química e montagem)."
        ]
    },
    {
        exp_Empresa: "Produflex Ind. Borrachas Ltda – Diadema. Área: Engenharia de Qualidade. De Mar/2011 até Nov/2012.",
        descricao: 
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

function inserirTopico(classeTopico, classeTitulo, descTitulo, descricoes, profissional) 
{
    const topico = document.createElement('div')
    topico.className = classeTopico

    topico.appendChild(criarElemento(classeTitulo, descTitulo))

    for (let i = 0; i < descricoes.length; i++)
    {
        if (profissional === true)
        {
            topico.appendChild(criarElemento('exp_Empresa', descricoes[i].exp_Empresa))

            descricoes[i].descricao.forEach(c => {
                topico.appendChild(criarElemento('descricao', c))
            })
        }
        else 
        {
            topico.appendChild(criarElemento('descricao', descricoes[i]))
        }    
    }
    return topico
}


const box = document.querySelector(".box3")

box.appendChild(inserirTopico('topico', 'titulo', 'Formação Educacional', form_Educacional, false))
box.appendChild(inserirTopico('topico', 'titulo', 'Qualificações', qualificacoes, false))
box.appendChild(inserirTopico('topico', 'titulo', 'Experiências Profissionais', exp_Profissionais, true))



