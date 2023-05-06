const express = require("express");
const router = express.Router();

app.get('/api/menuItems', (req, res) => {
   'SELECT * FROM ';
    connection.query(query, (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });
  });
module.exports = router;
