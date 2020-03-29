import React, { Component } from 'react'
import Header from '../Header'
import InfoEducacao from '../InfoEducacao'
import InfoContato from '../InfoContato'
import InfoEx from '../InfoEx'
import InfoEd from '../InfoEducacao'

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
            contato: 'nome@dev.com'
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
            cargo: 'Front',
            periodo: 'Agosto 2019',
            empresa: 'NASA',
            local: 'Nova York',
            conteudo: 'Fazia nada e ganhava bem',
            atual: true,
            },
            {
            id: 2,
            cargo: 'Back',
            periodo: 'Agosto 2018 - Agosto 2019',
            empresa: 'CIA',
            local: 'Boston',
            conteudo: 'Fazia nada e ganhava mal',
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
