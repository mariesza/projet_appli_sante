// //importation des librairies
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from "react";
// import { v4 as uuid } from 'uuid';



// //importation des fichiers
// import './PageAccueil.css';
// import '../models/dataPhysio.js';
// // import Physio from '../data/PhysioData.js';
// // import PhysioDataPreview from "./PhysioDataPreview";
// // import physio from "../data/PhysioData.js";

// function PageAccueil () {

//     const [displayList, setDisplayList] = useState(false) //par défaut, displayList à la valeur false donc on cache la liste 
//     const [response, setResponse] = useState('');
//     const [message, setMessage] = useState('');
//     const [physio, setAcces] = useState('');

// function onClick() {
//   setDisplayList(displayList ? false : true); //si displayList = true, alors on affecte la valeur false pour masquer sinon true : on affiche 
// }

// // const getphysio = () => {
// //     return ['donnée 1','Donnée 2'];
// // };


// // Fonction pour récupérer les données lors du chargement de la page
// // useEffect(() => {
// //     const fetchData = async () => {
// //       // Appel de la fonction getData pour récupérer les données
// //       const result = getphysio();

// //            // Mise à jour de l'état avec les données récupérées
// //            setAcces(result);
// //         };
    
// //         fetchData();
// //       }, []);

// const handleResponseChange = (event) => {
//   setResponse(event.target.value);
// };

//   const handleSaveResponse = () => {
//     // implémenter la logique pour enregistrer la réponse
//     // par exemple, en l'envoyant à un serveur ou en la stockant localement

//     // Afficher un message de succès
//     setMessage('Bravo, continue ainsi !');
//   };


// //   const accesDonne = () => {
// //     {console.log(physio)}
// //   };

//     const title = 'Health Tracker'
//     return (
//         <div className='ht-banner'>
//             <Link to="/auth/signup">
//             <button onClick={()=>onClick()}>S'inscrire</button>
//             </Link>

//             <Link to="/auth/signin">
//             <button onClick={()=>onClick()}>Se connecter</button>
//             </Link>

//             <h1 className='ht-title'>{title}</h1>
//             <p>Ton application santé qui te suit au quotidien 🤗 </p>
//             <img src='/images/logo1.png' width= {100} height= {100} className="logo" alt="logo de l'application" />

//             <p>
//                 Bonjour, qu'as-tu fait aujourd'hui pour atteindre tes objectifs ?
//             </p>
//             <textarea
//                 value={response}
//                 onChange={handleResponseChange}
//                 placeholder="Dis-moi tout !..."
//             />
//             < br/>
//              <button onClick={handleSaveResponse}>Enregistrer</button>
//              {message && <p>{message}</p>}

//             < br/>
//             <br />
//             <div className="FruitsContainer">            
//              {physio.map((item) => (
//              <physio key={uuid()} item = {item} />
//             ))} 
//            </div>       

//         </div>
//     )
// }

// export default PageAccueil;

//importation des librairies
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

//importation des fichiers
import './PageAccueil.css';
import Physio from '../data/PhysioData.js';

function PageAccueil() {
  const [displayList, setDisplayList] = useState(false);
  const [response, setResponse] = useState('');
  const [message, setMessage] = useState('');
  const [physio, setPhysio] = useState([]);

  const onClick = () => {
    setDisplayList(!displayList);
  };

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSaveResponse = () => {
    // Implémenter la logique pour enregistrer la réponse
    // par exemple, en l'envoyant à un serveur ou en la stockant localement

    // Afficher un message de succès
    setMessage('Bravo, continue ainsi !');
  };

  useEffect(() => {
    // Simuler une requête asynchrone pour récupérer les données
    const fetchData = async () => {
      try {
        // Appel à l'API ou récupération des données
        const result = await Physio.getData();

        // Mise à jour de l'état avec les données récupérées
        setPhysio(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  
  

  const title = 'Health Tracker';

  return (
    <div className="ht-banner">
      <Link to="/auth/signup">
        <button onClick={onClick}>S'inscrire</button>
      </Link>

      <Link to="/auth/signin">
        <button onClick={onClick}>Se connecter</button>
      </Link>

      <h1 className="ht-title">{title}</h1>
      <p>Ton application santé qui te suit au quotidien 🤗</p>
      <img src="/images/logo1.png" width={100} height={100} className="logo" alt="logo de l'application" />

      <p>Bonjour, qu'as-tu fait aujourd'hui pour atteindre tes objectifs ?</p>
      <textarea
        value={response}
        onChange={handleResponseChange}
        placeholder="Dis-moi tout !..."
      />
      <br />
      <button onClick={handleSaveResponse}>Enregistrer</button>
      {message && <p>{message}</p>}

      <br />
      <br />
      <button onClick={data}>Enregistrer</button>
        {physio.map((item) => (
          <Physio key={uuid()} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PageAccueil;
