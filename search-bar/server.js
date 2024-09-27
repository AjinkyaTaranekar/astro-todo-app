const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "bundle.js"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
