import express from "express";
const app = express();

app.get('/', (req, res) => {
  //console.log('Hello, I am express js of nodejs');
  res.send('Hello, I am express js of nodejs');
});

const port = process.env.port || 8080;
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});