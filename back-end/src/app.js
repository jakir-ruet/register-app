import express from "express";
import config from './config/config.json' assert {type: 'json'};
import bodyParser from 'body-parser';
import router from "./routes/route.js";
import connectdb from "./config/connectdb.js";
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(bodyParser.json());
app.use(cors(config.cors));
app.use(morgan('dev'));

app.get('/', router);

const port = config.port || 8080;
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
connectdb()
        .then(() => console.log('db connected'))
        .catch(err => { throw err });