const express = require("express");
const cors = require("cors");
const faimelyRouter = require("./routers/faimely");
const app = express();
const port = 8000;
require("./db/cannect");
app.use(cors());
app.use(express.json());
app.use(faimelyRouter);


app.listen(port, () => {
  console.log(`cannect with a port ${port}`);
});
