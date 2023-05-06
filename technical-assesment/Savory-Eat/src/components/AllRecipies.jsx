import React, { useState, useEffect } from "react";
import "../index.scss";
import axios from 'axios';

const AllRecepies = () => {
  const [recepies, setRecepies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/')
      .then(res => {
        setRecepies(res.data);
        console.log(res.data)
      })
      .catch(err=> {
        console.log(err);
      });
  }, []);

  const handleDelete = (recepie_Id) => {
    axios.delete(`http://localhost:4000/delete/${recepie_Id}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  };


  return (
    <div className="card-container">
      {recepies.map(food => (
        <div className="card" key={food.recepie_Id}>
          <button className="delete" onClick={()=>handleDelete(food.recepie_Id)}>delete</button>
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
      ))}
    </div>
  );
};

export default AllRecepies;
