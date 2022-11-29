const connectToMongo = require("./bd");
const express = require("express");

connectToMongo();
const app = express();
const port = 7000;
app.use(express.json());
//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, "localhost", () => {
  console.log(`server listen on port ${port}`);
});
