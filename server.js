const express = require("express");
const studentRoutes = require("./src/student/routes");
const app = express();
const port = 3005;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
