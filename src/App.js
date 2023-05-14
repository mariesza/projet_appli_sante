import './App.css';
import Master from './components/Master';
import { useState } from "react";


function App() {

  const [displayList, setDisplayList] = useState(false) //par défaut, displayList à la valeur false donc on cache la liste 

  function onClick() {
    setDisplayList(displayList ? false : true); //si displayList = true, alors on affecte la valeur false pour masquer sinon true : on affiche 
  }

  return (    


    <div className="HeathCare">
      <button onClick={()=>onClick()}>Afficher /Masquer </button>
      {displayList && <Master/>}
      {!displayList && <p>Pas de données déso 😕</p>}

    </div>

  );
}

export default App;
