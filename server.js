const express = require('express');
//initialize the app
const app = express();
const expressLayouts = require('express-ejs-layouts')
const router = express.Router()
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
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
//defining the port
const port = process.env.PORT || 5000;
const NODE__ENV = 'development'
const IN_PROD = NODE__ENV === 'production'
const SESS_NAME = 'Sid'
const configDB = require('./config/database');
//connect to database
mongoose.connect(configDB.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (err) => { console.log('DB connected ^_^ ') })

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


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
    secret: 'anystringoftext',
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

app.get('/', (req, res) => {
    return res.json({
        message: "This is node.js role based authentication system"
    });
});

// Create a custom middleware function
const checkUserType = function(req, res, next) {
    const userType = req.originalUrl.split('/')[2];
    // Bring in the passport authentication starategy
    require('./config/passport')(userType, passport);
    next();
};

app.use(checkUserType);
// Global variables
/* app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
}); */
//routing files
/* require('./config/passport')(passport); */
require('./routes/client_rout')(app, passport);
require('./routes/main_routes')(app, passport);
require('./routes/addNew_route')(app);
require('./routes/route_transactions')(app)
require('./routes/users_route')(app);
require('./routes/admin_route')(app);

//localhost listen at 5000
app.listen(port, () => {
    console.log('server listening on' + " " + port)
});