const expressSession = require("express-session");
const routes = require('./routes/routes.js');
const pug = require("pug");
const path = require('path');
const express = require("express");
const app = express();


app.set('view engine', 'pug');
app.set('views', __dirname + "/views");
app.use(express.static(path.join(__dirname,'/public')));

const urlencodedParser = express.urlencoded({
    extended: false
});

app.get("/", routes.index);
app.get("/login",routes.login);
app.get("/register",routes.register);

app.post('/postRegister', urlencodedParser, routes.postRegister);



app.listen(3000)