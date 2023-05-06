const express = require("express");
const connection = require("./database-mysql/index");
const recepiesRouter = require("./routes/recipiesRoute");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
// TODO - add additional route handlers as necessary
app.use(recepiesRouter); 

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
