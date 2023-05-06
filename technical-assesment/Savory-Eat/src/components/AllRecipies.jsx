import { useState , useEffect , React } from "react";
import "../index.scss";
//import data from '../data/data.json';
import axios from 'axios';
//step 1 done , a problem happened with the commit 


const AllRecepies = () => {
  const [recepies, setRecepies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/')
      .then(res => {
        setRecepies(res.data);
      });
  }, []);


  return (
    <div className="card-container">
      {recepies.map(food => (
      <div className="card">
        <button className="delete">delete</button>
        <button className="update">update </button>
        <>
          <div className="header">
            <img
              className="img"
              src={food.recepie_Image}
              alt={food.recepie_Name}
            />
          </div>
          <div className="text">
            <h1 className="food">{food.recepie_Name}</h1>
            <i> Cook Time: {food.Cook_Time} </i> <br />
            <i> Prep Time: {food.Prep_Time}</i> <br />
            <i> Serves: {food.Serves} </i>
          </div>
        </>
      </div>
      ))};
    
    </div>
  );
};

export default AllRecepies;
