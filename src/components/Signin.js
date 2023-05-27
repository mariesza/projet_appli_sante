import "./Signin.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { redirect } from "react-router-dom";


import User from "../modele/User.js";


import axios from "axios";


// // const axiosInstance = axios.create({
// //   baseURL: "https://fake-health-data-api.shrp.dev",
// //   timeout: 3000,
// //   headers: {},
// // });


// function Signin() {
//   const login = import.meta.env.VITE_API_LOGIN;
//   const password = import.meta.env.VITE_API_PASSWORD;

//   // const {
//   //   reset,
//   //   register,
//   //   handleSubmit,
//   //   formState: { errors },
//   // } = useForm();


//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [user, setUser] = useState(null);
//   const [refreshToken, setRefreshToken] = useState();
//   const [userId, setUserId] = useState();


//   async function onSubmitSignInForm(data) {
//     try {
//       setLoading(true);
//       const response = await axios.post(
//         import.meta.env.VITE_API + "auth/signin",
//         null,
//         { auth: { username: login, password: password } }
//       );

//       if (response.status === 200) {
//         setAccessToken(response.data.access_token);
//         setRefreshToken(response.data.refresh_token);

//         const aUser = new User(null, null, data.email);


//         aUser.accessToken = response.data.data.access_token;
//         aUser.refreshToken = response.data.data.refresh_token;
//         aUser.expires = response.data.data.expires;


//         const decodedPayload = jwt_decode(aUser.accessToken);


//         aUser.id = decodedPayload.id;


//         setLoading(true);
//         const response2 = await axiosInstance.get(`/users/${aUser.id}`, {
//           headers: { Authorization: `Bearer ${aUser.accessToken}` },
//         });
//         setLoading(false);


//         if (response2.status === 200) {
//           aUser.first_name = response2.data.data.first_name;
//           aUser.last_name = response2.data.data.last_name;
//           aUser.email = response2.data.data.email;
//           aUser.status = response2.data.data.status;


//           setError(false);
//           setUser(aUser);
//         } else {
//           setError(true);
//         }


//         reset();
//       }
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//       setError(true);
//     }
//   }


//   function onSignOut() {
//     setUser(null);
//     return redirect("/connexion");
//   }


//   return (
//     <div className="Signup">
//       {loading === false && error === false && user !== null && (
//         <p>
//           <b>
//             {user.first_name} {user.last_name}
//           </b>
//           &nbsp; ({user.email}) est connecté
//           <button onClick={() => onSignOut()}>Se déconnecter</button>
//         </p>
//       )}
//       {loading === true && <p>Chargement...</p>}
//       {error === true && <p>Une erreur s'est produite</p>}
//       {user === null && (
//         <form onSubmit={handleSubmit(onSubmitSignInForm)}>
//           <input
//             placeholder="Adresse mail"
//             type="email"
//             {...register("email", { required: true })}
//           />
//           {errors.email && <span>Ce champ est obligatoire</span>}


//           <input
//             type="password"
//             placeholder="Mot de passe"
//             {...register("password", { required: true })}
//           />
//           {errors.password && <span>Ce champ est obligatoire</span>}


//           <button type="submit">Connexion</button>
//           <br /> 
//           <a href="/">Retour</a>
//         </form>
        
//       )}
//     </div>
//   );
// }


function Signin() {
  const login = import.meta.env.VITE_API_LOGIN;
  const password = import.meta.env.VITE_API_PASSWORD;

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    async function signIn() {
      //connecte l'utilisateur à l'API afin d'obtenir un access_token (JWT)
      //l'access_token permet d'interagir avec l'API en mode authentifié
      //communication de l'identifiant et du mot de passe de l'utilisateur
      //via le header HTTP Authorization en mode Basic

      try {
        setLoading(true);
        setError(false);

        const response = await axios.post(
          import.meta.env.VITE_API + "auth/signin",
          null,
          { auth: { username: login, password: password } }
        );

        setLoading(false);

        if (response.status === 200) {
          //mise à jour de l'access_token
          //attention, l'access_token a une durée de validité d'1 heure
          //pour obtenir un nouvel access_token, il faut effectuer un nouveau login ou employer le refresh_token
          setAccessToken(response.data.access_token);
          //mise à jour du refresh_token
          setRefreshToken(response.data.refresh_token);

          //récupération des informations, converties en Base64, stockées dans le Payload de l'access_token
          const payload = jwt_decode(accessToken);
          setUserId(payload.id); //id de l'utilisateur connecté
        } else {
          console.error(response.status);
          setError("Can't Sign In");
        }
      } catch (error) {
        console.error(error);

        setLoading(false);
        setError("Can't Sign In");
      }
    }

    signIn();
  }, [accessToken, login, password]);

  useEffect(() => {
    async function getPeople() {
      //permet d'obtenir la liste des utilisateurs fictifs depuis l'API

      try {
        setLoading(true);
        setError(false);

        //requête HTTP auprès de l'API
        //authentification à l'aide de l'access_token obtenu lors du sign in
        //communication de l'access_token via le header HTTP Authorization en mode bearer
        const response = await axios.get(import.meta.env.VITE_API + "people", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setLoading(false);

        if (response.status === 200) {
          //mise à jour des personnes fictives
          setPeople(response.data.people);
        } else if (response.status === 498) {
          console.error(response.status);
          setError("Access Token has expired");
        } else {
          console.error(response.status);
          setError("Can't Fetch API");
        }
      } catch (error) {
        console.error(error);

        setLoading(false);
        setError("Can't Fetch API");
      }
    }

    if (accessToken) getPeople();
  }, [accessToken]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Sorry, an error has occured : {error}</p>}
      {people.length &&
        people.map((aPeople) => (
          <p key={uuid()}>{aPeople.firstname + " " + aPeople.lastname}</p>
        ))}
    </>
  );
}
export default Signin;