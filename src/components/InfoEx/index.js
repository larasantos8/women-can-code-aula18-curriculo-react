import React from 'react'

function InfoEx(props) {
  const { cargo, periodo, empresa, local, conteudo}

  return (  
    <div className="experience">
    <h2>Experiência Profissional</h2>

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

    <button>Mostrar atual</button>
    </div>

  )
}

export default InfoEx
       
// experiencia: [
//     {
//     id: 1,
//     cargo: 'Front',
//     periodo: 'Agosto 2019',
//     empresa: 'NASA',
//     local: 'Nova York',
//     conteudo: 'Fazia nada e ganhava bem',
//     atual: true
//     },
//     {
//     id: 2,
//     cargo: 'Back',
//     periodo: 'Agosto 2018 - Agosto 2019',
//     empresa: 'CIA',
//     local: 'Boston',
//     conteudo: 'Fazia nada e ganhava mal',
//     atual: false