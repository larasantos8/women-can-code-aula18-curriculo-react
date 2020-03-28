import React from 'react'
import InfoEd from '../InfoEd/index'

function InfoEdContato(props){
    const { tipo, contato } = props.contato
    const { instituicao, curso } = props.educacao
    

    return(
        <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <div className="lista-de-contatos">
            <li>
              <div className="item-contato">
                 <h4> {tipo} </h4>
                <p> {contato} </p>
              </div>
            </li>
          </div>
        </div>

        {instituicao.map(inst => (
            <InfoEd conteudo={inst} key={inst.id} />
        ))
        }

        {curso.map(curs => (
            <InfoEd conteudo={curs} key={curs.id} />
        ))
        }
        </aside>
    )
}

export default InfoEdContato
