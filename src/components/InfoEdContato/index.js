import React from 'react'

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
        </aside>
    )
}

export default InfoEdContato


// educacao: [
//     {
//     id: 1,
//     instituicao: 'EMEF',
//     curso: 'Ensino basico'
//     },
//     {
//     id: 2,
//     instituicao: 'ETEC',
//     curso: 'Como ser dev'
//     }
