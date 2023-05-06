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
        res.send("'recepie posted ??'")
      });
    });

    router.delete("/delete/:recepie_Id" , (req , res ) => {
        const {recepie_Id} = req.params
      connection.query("DELETE from recepie WHERE recepie_Id = ?" , recepie_Id , (err) => {
        if (err) {
         console.log(err)
        }
      else {
        res.send("deleted") 
    }

     }) 
  })
      




module.exports = router;
