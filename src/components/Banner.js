import './Banner.css'
import { useState } from "react";
import { Link } from 'react-router-dom';


function Banner() {

    const [displayList, setDisplayList] = useState(false) //par défaut, displayList à la valeur false donc on cache la liste 

function onClick() {
  setDisplayList(displayList ? false : true); //si displayList = true, alors on affecte la valeur false pour masquer sinon true : on affiche 
}

const [response, setResponse] = useState('');
const [message, setMessage] = useState('');

const handleResponseChange = (event) => {
  setResponse(event.target.value);
};

  const handleSaveResponse = () => {
    // implémenter la logique pour enregistrer la réponse
    // par exemple, en l'envoyant à un serveur ou en la stockant localement

    // Afficher un message de succès
    setMessage('Bravo, continue ainsi !');
  };

    const title = 'Health Tracker'
    return (
        <div className='ht-banner'>
            <Link to="/auth/signup">
            <button onClick={()=>onClick()}>S'inscrire</button>
            </Link>

            <Link to="/auth/signin">
            <button onClick={()=>onClick()}>Se connecter</button>
            </Link>

            <h1 className='ht-title'>{title}</h1>
            <p>Ton application santé qui te suit au quotidien 🤗 </p>
            <img src='/images/logo1.png' width= {100} height= {100} className="logo" alt="logo de l'application" />

            <p>
                Bonjour, qu'as-tu fait aujourd'hui pour atteindre tes objectifs ?
            </p>
            <textarea
                value={response}
                onChange={handleResponseChange}
                placeholder="Dis-moi tout !..."
            />
             <button onClick={handleSaveResponse}>Enregistrer</button>
             {message && <p>{message}</p>}
             
        </div>
    )
}

export default Banner