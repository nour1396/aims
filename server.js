const express = require('express');
//initialize the app
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const compression = require('compression');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const cors = require('cors');

//defining the port
var port = process.env.PORT || 5000;
const NODE__ENV = 'development'
const IN_PROD = NODE__ENV === 'production'
const SESS_NAME = 'Sid'
const configDB = require('./config/database');

//connect to database
mongoose.connect(configDB.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (err) => { console.log('DB connected ^_^ ', err) })
mongoose.set('useFindAndModify', false);
app.use(compression());

//define the middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
    name: SESS_NAME,
    cookie: {
        sameSite: true,
        secure: IN_PROD
    },
    secret: 'anystring',
    saveUninitialized: true,
    resave: true,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 2 * 24 * 60 * 60
    })
}));

//use passport middleware
app.use(passport.initialize());
app.use(passport.session());

//flash module to alert messeges
app.use(flash());

//define the static folder
app.use(express.static(path.join(__dirname, '/assets')));
app.use('/scripts', express.static(`${__dirname}/node_modules/`))
    //use body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//specify ejs as view engien
app.set('view engine', 'ejs');

//routing files
require('./config/passport')(passport);
require('./routes/client_rout')(app, passport);
require('./routes/main_routes')(app, passport);
require('./routes/addNew_route')(app);
require('./routes/route_transactions')(app)

//localhost listen at 5000
app.listen(port, () => {
    console.log('server listening on' + " " + port)
});