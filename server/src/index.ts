import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;

app.use("/", (req, res) => {
  res.send("this is tic tac toe server YEAH!!");
});

const http = app.listen(PORT, () => {
  console.log(`Runing server on http://localhost:${PORT}`);
});
