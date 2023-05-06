import React, { useState } from "react";
import "../App.css";
import axios from "axios"


const Add = () => {
  const [CookTime, setCookTime] = useState('');
  const [PrepTime, setPrepTime] = useState('');
  const [recepieName, setrecepieName] = useState('');
  const [Serves, setServes] = useState('');
  const [recepieIngredients, setrecepieIngredients] = useState('');
  const [recepieImage, setrecepieImage] = useState('');
  const [categorie, setCategorie] = useState('');
  const [recepieDescription , setRecepieDescription] = useState('');


  const handleAdd = (e) => {
    e.preventDefault();
    const newRecepie = { CookTime,PrepTime,recepieName,Serves,recepieIngredients,recepieImage,categorie,recepieDescription };
    axios.post('http://localhost:4000/post', newRecepie)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name"  onChange={(e) => setrecepieName(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" onChange={(e) => setCookTime(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" onChange={(e) => setPrepTime(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" onChange={(e) => setServes(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" onChange={(e) => setCategorie(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" onChange={(e) => setRecepieDescription(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients"  onChange={(e) => setrecepieIngredients(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" onChange={(e) => setrecepieImage(e.target.value)}/>
      </div>
      <button className="create-recipe-btn" onClick={()=>handleAdd}>Create Recipe</button>
    </div>
  );
};
export default Add;
