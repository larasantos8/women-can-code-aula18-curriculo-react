import React from "react";
import "./style.css"

function App() {
  return (
    <main>
        <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>
          Faço nada da vida
        </p>
      </div>
      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <div className="lista-de-contatos">
            <li>
              <div className="item-contato">
                <h4>TELEFONE</h4>
                <p>(19) 0000-0000</p>
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
      </aside>
      <div className="experience">
        <h2>Experiência Profissional</h2>

        <div className="experience-item">
          <div>
            <h4>Developer</h4>
            <date>Novembro 2019 - Atualmente</date>

            <strong>Empresa da hora</strong>
            <span>Valinhos - São Paulo</span>
          </div>
          <p>
            Fazia nada
        </p>
        </div>
        <div className="experience-item">

          <div>
            <h4>Developer</h4>
            <date>Agosto 2019 - Novembro 2019</date>

            <strong>Empresa estranha</strong>
            <span>Vinhedo - São Paulo</span>
          </div>
          <p>
            Fazia menos
        </p>
        </div>

        <button>Mostrar atual</button>
      </div>
    </main>
  );
}

export default App;
