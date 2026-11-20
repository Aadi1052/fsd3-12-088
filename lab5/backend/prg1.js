import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Aditya");
});
app.listen(4444, () => console.log("prg1 is runit at 4444"));
