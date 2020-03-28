import React, { Component } from 'react'
import InfoEdContato from '../InfoEdContato'

class InfoList extends Component {

    state = {
    infos: [
        {
        nome: 'Seu nome',
        ocupacao: 'Developer',
        resumo: '20 anos, solteira e vida loca.',
        perfilProfissional: 'Faço miojo bom',
        contatos: [
            {
            id: 1,
            tipo: 'telefone',
            contato: '19 0000-0000'
            },
            {
            id: 2,
            tipo: 'email',
            contato: 'nome@dev.com'
            }
        ],
        educacao: [
            {
            id: 1,
            instituicao: 'EMEF',
            curso: 'Ensino basico'
            },
            {
            id: 2,
            instituicao: 'ETEC',
            curso: 'Como ser dev'
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
            atual: true
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
    ]
    }

    render(){
        const { infos } = this.state

        return(
            <div className = "lista-de-contatos">{
                infos.map(info => {
                    <InfoEdContato key={info.id} conteudo={info} />
                })
            }
            </div>
        )
    }
}

export default InfoList