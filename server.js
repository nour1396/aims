const express = require('express');
//initialize the app
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const cors = require('cors');
//defining the port
const port = process.env.PORT || 5000;
const NODE__ENV = 'development'
const IN_PROD = NODE__ENV === 'production'
const SESS_NAME = 'ROOTS'
const configDB = require('./config/db');

//routing files
const mainRouting = require('./routes/main.routing');
const clientRouting = require('./routes/client.routing');
const transactionRouting = require('./routes/transaction.routing');
const addNewRouting = require('./routes/addNew.routing');

//connect to database
mongoose.connect(configDB.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (err) => { console.log('DB connected ^_^ ', err) })

//define the middlewares
app.use(cors());
app.use(compression());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
    name: SESS_NAME,
    secret: 'anystring',
    saveUninitialized: true,
    resave: true,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 2 * 24 * 60 * 60
    })
}));

//define the static folder
app.use(express.static(path.join(__dirname, '/assets')));

//use body parser middleware
app.use(express.json());

app.use(clientRouting);
app.use(transactionRouting);
app.use(addNewRouting);
app.use(mainRouting);

//localhost listen at 5000
app.listen(port, () => {
    console.log('server listening on' + " " + port)
});