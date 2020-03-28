import React from "react";
import "./style.css"
import InfoList from "./components/InfoList";
import InfoEd from "./components/InfoEd";
import InfoEdContato from "./components/InfoEdContato";
import InfoEx from "./components/InfoEx";

function App() {
  return (
    <>
    <Header />
    <InfoList />
    <InfoEdContato/>
    <InfoEd/>
    <InfoEx/>
  </>

  );
}

export default App;
