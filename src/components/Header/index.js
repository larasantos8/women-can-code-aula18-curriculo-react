import React from 'react'

function Header(props){
    const { nome, ocupacao, resumo, perfilProfissional } = props.infos

    return(
    <header>
     <div className="perfil">
        <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Perfil" />
      </div>
      <div className="biografia">
        <h1>
          {nome} <br />
        </h1>
    <div className="ocupacao"> {ocupacao} </div>
        <p>{resumo}</p>
      </div>

      <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>
         {perfilProfissional}
        </p>
      </div>
    </header>
    )
}

export default Header