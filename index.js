const expressSession = require("express-session");
const routes = require('./routes/routes.js');
const pug = require("pug");
const path = require('path');
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser);


app.set('view engine', 'pug');
app.set('views', __dirname + "/views");
app.use(express.static(path.join(__dirname,'/public')));

const urlencodedParser = express.urlencoded({
    extended: false
});

app.get("/login", routes.login);
app.post("/login", routes.checkAuth);

app.get("/register", routes.register);
app.post("/postRegister", urlencodedParser,routes.postRegister);

app.listen(3000);