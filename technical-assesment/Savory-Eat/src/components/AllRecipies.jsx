import React from "react";
import "../index.scss";
import data from '../data/data.json'
const AllRecepies = () => {
  return (
    <div className="card-container">
      {data.map(food => (
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
