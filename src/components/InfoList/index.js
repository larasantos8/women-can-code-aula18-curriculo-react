import React, { Component } from 'react'
import Header from '../Header'
import InfoEducacao from '../InfoEducacao'
import InfoContato from '../InfoContato'
import InfoEx from '../InfoEx'

class InfoList extends Component {

    state = {
    infos: [
        {
        nome: 'Lara Santos',
        ocupacao: 'Developer',
        resumo: '20 anos, namora e vida loca.',
        perfilProfissional: 'Faço miojo bom',
        contatos: [
            {
            id: 1,
            tipo: 'Telefone',
            contato: '19 0000 0000'
            },
            {
            id: 2,
            tipo: 'Email',
            contato: 'laarasantos12@gmail.com'
            }
        ],
        educacao: [
            {
            id: 1,
            instituicao: 'Desenvolvimento de Jogos Digitais',
            curso: 'Ensino Superior'
            },
            {
            id: 2,
            instituicao: 'José Ferreira da Silva',
            curso: 'Ensino Médio'
            }
        ],
        experiencia: [
            {
            id: 1,
            cargo: 'Analista de Sucesso do Cliente',
            periodo: 'Dezembro 2019 - Atualmente',
            empresa: 'Superlógica',
            local: 'Campinas-SP',
            conteudo: 'Responsável por acompanhar o ciclo de vida dos clientes, planejando estratégias para clientes potenciais e em risco. Realizar consultorias sobre o sistema , avaliar indicadores de performance, propor soluções, recolher feedbacks e analisar métricas de satisfação',
            atual: true,
            },
            {
            id: 2,
            cargo: 'Especialista em Atendimento ao Cliente',
            periodo: 'Maio 2019 - Novembro 2019',
            empresa: 'Monde Sistemas',
            local: 'Americana-SP',
            conteudo: 'Encarregada de oferecer suporte aos usuários solucionando dúvidas em relação ao sistema e atuando na resolução de problemas técnicos. Auxiliando na implantação na máquina do cliente e realizando a configuração de módulos de nota fiscal e emissão de boletos. Responsável por dar treinamento para novos clientes sobre partes do sistema e instruir funcionários aprendizes.',
            atual: false
            },
            {
            id: 3,
            cargo: 'Estagiária em Atendimento ao Cliente',
            periodo: 'Agosto 2018 - Abril 2019',
            empresa: 'Monde Sistemas',
            local: 'Americana-SP',
            conteudo: 'Aprendendo sobre o sistema e oferecendo suporte aos usuários solucionando dúvidas em relação ao sistema e atuando na resolução de problemas técnicos.',
            atual: false
            }
        ]
        }
    ],
     isShowAtual: false
    }

    render(){
        const { infos } = this.state

        return(
        
        <div> {
            infos.map(info =>(
            <div>

                <Header key={info.nome} 
                nome={info.nome}
                ocupacao={info.ocupacao}
                resumo={info.resumo}
                perfilProfissional={info.perfilProfissional}
                />

                <aside>
                    <div className="sidebar">
                    <h3>Contatos</h3>

                    <div className="lista-de-contatos">
                        {info.contatos.map(contato => (
                            <InfoContato conteudo={contato} key={contato.id} />
                            ))
                        }
                    </div>
                    </div>

                    <div className="sidebar">
                        <h3>Educação</h3>
                        <div className="lista-de-formacao">
                            {info.educacao.map(formacao => (
                                <InfoEducacao conteudo={formacao} key={formacao.id} />
                                ))
                            }
                        </div>
                    </div>
                </aside>
                    <div className="experience">
                        <h2>Experiência Profissional</h2>
                            {
                            this.state.isShowAtual ? info.experiencia.filter(trabalho => trabalho.atual).map(trabalho => (
                                <InfoEx conteudo={trabalho} key={trabalho.id} />
                                )) :
                            info.experiencia.map(trabalho => (
                                <InfoEx conteudo={trabalho} key={trabalho.id} />
                                )) 
                            } 
                    </div>
                    <button onClick = { () => this.setState({...this.state,
                            isShowAtual: !this.state.isShowAtual, })}>Mostrar atual</button> 
            </div>
            
            ))
            
            }
        </div> 
        
        )
    }
}

export default InfoList
