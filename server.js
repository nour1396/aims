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
}, (err) => {
    initial();
    console.log('DB connected ^_^ ')
})
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
app.use(compression());
//.....
const db = require("./models");
const Role = db.role;
//initial() function helps us to create 3 important rows in roles collection.
function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'admin' to roles collection");
            });
        }
    });
}
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

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// routes
require('./routes/client_rout')(app, passport);
require('./routes/main_routes')(app, passport);
require('./routes/addNew_route')(app);
require('./routes/route_transactions')(app);
require('./routes/auth_routes')(app);
require('./routes/user_routes')(app);

// set port, listen for requests at 5000
app.listen(port, () => {
    console.log('server listening on' + " " + port)
});