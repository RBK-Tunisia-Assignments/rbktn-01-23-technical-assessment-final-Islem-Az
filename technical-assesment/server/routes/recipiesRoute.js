const express = require("express");
const router = express.Router();
const connection = require("../database-mysql/index")


 router.get("/",  (req, res) => {
    connection.query('SELECT * FROM recepie', function (err, result) {
            res.send(result)
    })
})

 router.post("/post", (req, res) => {
    const { Cook_Time,Prep_Time,recepie_Name,Serves,recepie_Ingredients,recepie_Image,categorie,recepie_Description,users_user_Id } = req.body
      connection.query("INSERT INTO recepie SET ?",{Cook_Time,Prep_Time,recepie_Name,Serves,recepie_Ingredients,recepie_Image,categorie,recepie_Description,users_user_Id}, (err) => {
        if (err) {
            console.log(err)
        } 
        res.send("")
      });
    });




module.exports = router;
