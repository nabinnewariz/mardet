const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

dotenv.config({path: './config.env'});

require('./database/connection');

app.use(express.json());
app.use(require('./router/register'));
app.use(require('./router/guestDetails'));
const helmet = require('helmet');
app.use(helmet.referrerPolicy({policy: 'strict-origin-when-cross-origin'}));
const PORT = process.env.PORT;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello world from the server');
});

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})