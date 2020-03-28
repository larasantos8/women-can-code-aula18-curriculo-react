import React from 'react'

function InfoEd(props) {
  const { instituicao, curso } = props.educacao

  return (
     <div className="sidebar">
      <h3>Educação</h3>
      <div className="lista-de-formacao">
        <li>
          <h4>{instituicao}</h4>
          <p>{curso}</p>
        </li>
      </div>
    </div>
  )
}

export default InfoEd
       
       
      