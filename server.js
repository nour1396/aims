var express = require('express');
//initialize the app
var app = express();
const expressLayouts = require('express-ejs-layouts')
var router = express.Router()
var mongoose = require('mongoose');
var morgan = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var passport = require('passport');
const compression = require('compression');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var bodyParser = require('body-parser');
const cors = require('cors');

//defining the port
var port = process.env.PORT || 5000;
const NODE__ENV = 'development'
const IN_PROD = NODE__ENV === 'production'
const SESS_NAME = 'Sid'
var configDB = require('./config/database');

//connect to database
mongoose.connect(configDB.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (err) => { console.log('DB connected ^_^ ') })
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