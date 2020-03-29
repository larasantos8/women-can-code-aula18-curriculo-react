import React from 'react'

function InfoContato(props) {
  const { tipo, contato } = props.conteudo

  return (
    <li>
    <div className="item-contato">
       <h4> {tipo} </h4>
      <p> {contato} </p>
    </div>
    </li>
  )
}

export default InfoContato
       