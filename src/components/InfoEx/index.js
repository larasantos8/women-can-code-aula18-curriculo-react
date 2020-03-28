import React from 'react'

function InfoEx(props) {
  const { cargo, periodo, empresa, local, conteudo} = props.conteudo

  return (  
    <div className="experience-item">
      <div>
        <h4>{cargo}</h4>
        <date>{periodo}</date>

        <strong>{empresa}</strong>
        <span>{local}</span>
      </div>
      <p>
        {conteudo}
    </p>
    </div>

  )
}

export default InfoEx
