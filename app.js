const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});

require('./database/connection');

app.use(express.json());
app.use(require('./router/register'));
app.use(require('./router/guestDetails'));
const helmet = require('helmet');
app.use(helmet.referrerPolicy({policy: 'strict-origin-when-cross-origin'}));
const PORT = process.env.PORT || 3000;
app.use(cors());
const bodyParser = require('body-parser');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });
// app.options('*', cors());
// app.use(
//     cors({
//         origin: "*",
//         methods: ["GET", "POST"],
//         allowedHeaders: "*",
//         exposedHeaders: "*"
//     })
// )
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello world from the server');
});

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})