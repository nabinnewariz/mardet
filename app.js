const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');

dotenv.config({path: './config.env'});

require('./database/connection');

app.use(express.json());
app.use(require('./router/register'));
app.use(require('./router/guestDetails'));
const helmet = require('helmet');
app.use(helmet.referrerPolicy({policy: 'strict-origin-when-cross-origin'}));
const PORT = process.env.PORT || 3000;

const cors = require('cors');
const app = express();
var whitelist = ['http://localhost:8000', 'http://localhost:8080']; //white list consumers
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};

app.use(cors(corsOptions)); //adding cors middleware to the express with above configurations
// app.use(
//     cors({
//         origin: "*"
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