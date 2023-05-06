const express = require("express");
const router = require("./routes/recipiesRoute");
const cors = require("cors")
const app = express();
const PORT = 4000;

// TODO - add additional route handlers as necessary
app.use(cors)
app.use("/",router);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
