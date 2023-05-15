import { v4 as uuid } from 'uuid';
import axios from "axios";
import {useEffect} from 'react';
import PhysioPreview from './PhysioPreview.js';
import { useState } from "react";
import { useForm } from "react-hook-form";


const axiosInstance = axios.create({
    baseURL :"https://fake-health-data-api.shrp.dev/",
    timeout : 3000, //si je n'ai pas de réponse au bout de 3000 ms la requête n'est pas aboutie 
    headers:{}
}); 

function Master(){
    const[dataphysios, setPhysio] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const[needToReload, setNeedToReload] = useState(false);

    const {
      reset,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    async function onSubmitSearchForm(data) {
      const keyword = data.keyword;
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `/people/physiologicalData/?search=${keyword}`
        );
        const collectionOfPhysioItems = response.data.people.physiologicalData.map(
          (jsonItem) => new PhysioPreview(jsonItem.weight, jsonItem.date)
        );
        setPhysio(collectionOfPhysioItems);
        setLoading(false);
        setError(false);
        reset();
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }

    function onReloadData() {
        setNeedToReload(needToReload ? false : true); //déclenche l'exécution de useEffect
      }

      useEffect(() => {
        async function fetchPhysioFromAPI(){
            try {
                setLoading(true);
                const response = await axiosInstance.get('/people/0b3a6122-7b14-4a01-9bea-e6e185dace07/physiological-data');
                const collectionOfPhysioItems = response.data.people.physiologicalData.map(jsonItem => new Master(jsonItem.weight, jsonItem.date));
                //responses à toujours data, et dans les données que l'on prend, on a une clé data. 
                //on veut itérer et mettre en données js donc on fait un map cad une boucle, où il créer un nouveau objet fruit qui vient du json
                setPhysio(collectionOfPhysioItems);
                setLoading(false);
                setError(false)
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
    }
    
    fetchPhysioFromAPI();
    }, [needToReload]);    


return (
    <div className ="Master">
        <div>
        <button onClick={() => onReloadData()}>Recharger les données</button>

        <form onSubmit={handleSubmit(onSubmitSearchForm)}>
        <input
          placeholder="Mot clé"
          {...register("keyword", { required: true })}
        />
        {errors.keyword && <span>Ce champ est obligatoire</span>}

        <input type="submit" value="Recherche" />
      </form>

        {loading && <p>Loading...</p>}
        {error && <p>Erreur</p>}

        <div className="PhysioContainer">
        {dataphysios.map((dataphysio) => (
          <PhysioPreview key={uuid()} dataphysio={dataphysio} />
        ))}
        </div>

        </div>
    </div>
    );
}

export default Master;