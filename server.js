import express from "express";

const app = express();
const PORT = 5001;

app.get("/hi", (req, res) => {
  res.send("hi docker im here now !!!");
});
app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});
