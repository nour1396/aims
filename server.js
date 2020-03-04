var express = require('express');
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
var bcrypt = require('bcryptjs');
var LocalStrategy = require('passport-local').Strategy;
var port = process.env.PORT || 5000;
const NODE__ENV = 'development'
const IN_PROD = NODE__ENV === 'production'
const SESS_NAME = 'Sid'
var configDB = require('./config/database');
mongoose.connect(configDB.urlS, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (err) => { console.log('DBS connected ^_^ ') })

mongoose.set('useFindAndModify', false);


app.use(compression());

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
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(express.static(path.join(__dirname, '/assets')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');


// Global variables
/* app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
}); */

require('./config/passport')(passport);
require('./routes/client_rout')(app, passport);
require('./routes/main_routes')(app, passport);
require('./routes/addNew_route')(app);
require('./routes/invoice_route')(app);
require('./routes/journalEntry_route')(app);
require('./routes/purchase_route')(app);
require('./routes/route_transactions')(app)
    //require('./config/auth')

app.listen(port, () => {
    console.log('server listening on' + " " + port)
});