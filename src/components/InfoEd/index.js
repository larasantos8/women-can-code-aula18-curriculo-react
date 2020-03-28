import React from 'react'

function InfoEd(props) {
  const { instituicao, curso } = props.educacao

  return (
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

    <div className="sidebar">
      <h3>Educação</h3>
      <div className="lista-de-formacao">
        <li>
          <h4>Faculdade da vida</h4>
          <p>Uniesquina 2014 - 2018</p>
        </li>
        <li>
          <h4>EMEF</h4>
          <p>Qualquer lugar 2012 - 2013</p>
        </li>
      </div>
    </div>
  )
}

export default Comment
       
       
      