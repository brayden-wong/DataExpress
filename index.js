const expressSession = require("express-session");
const pug = require("pug");
const express = require("express");
const app = express();


app.set('view engine', 'pug');
app.set('views', __dirname + "/views");
app.use(express.static(path.join(__dirname,'/public')));

const urlencodedParser = express.urlencoded({
    extended: false
});

app.get("/",routes.index);
app.get("/login",routes.login);
app.get("/register",routes.register);



app.listen(3000)