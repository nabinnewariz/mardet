const mongoose = require('mongoose')

const marriagDB = process.env.DATABASE;

mongoose.connect(marriagDB).then(() => {
    console.log('build connection with cloud mongodb atlas');
}).catch((err) => console.log('no connection'));