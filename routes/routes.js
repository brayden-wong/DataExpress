const bcrypt = require("bcryptjs");
const { response } = require("express");
const {MongoClient} = require('mongodb');
const cookieParser = require("cookie-parser");

const url = 'mongodb+srv://user_1:Passw0rd1@cluster0.lolsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//const url = 'mongodb+srv://user_1:Passw0rd1@cluster0.lolsc.mongodb.net/test'

const client = new MongoClient(url);
const db = client.db('users');
const collection = db.collection('information');


const encrypt = async str => {
    const salt = await bcrypt.genSalt(10);
    str = await bcrypt.hash(str, salt);
    return str;
}

exports.index = (req, res) => {
    res.render('index');
}

exports.login = (req, res) => {
    res.render('login');
}

exports.register = (req, res) => {
    res.render('register');
}

exports.checkAuth = async(req,res) => {
    await client.connect();
    const UserUname = req.body.username;
    const UserPassword = req.body.password;
    const findPassword = await collection.findOne({"Username": UserUname})
    console.log(findPassword);
    client.close();
    
};

exports.postRegister = async (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirm = req.body.confirmation;
    const age = req.body.age;
    const question1 = req.body.mult1;
    const question2 = req.body.mult2;
    const question3 = req.body.mult3;
    const question4 = req.body.mult4;

    const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{4,}.[a-zA-Z]{2,}$/;
    const userRegex = /^[0-9a-zA-Z]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/; 
    
    if(username != null && password != null && email != null && age != null && confirm != null) {
        if(password == confirm) {
            if(userRegex.test(username) && emailRegex.test(email) && passwordRegex.test(password) && !isNaN(age)) {

                await client.connect();
                const id = await collection.countDocuments() + 1;
                const encrypted = await encrypt(password);
                console.log('password: ', encrypted);
                let userInfo = {
                    "_id" : id,
                    "username" : username,
                    "password" : encrypted,
                    "email" : email,
                    "age" : age,
                    "question1" : question1,
                    "question2" : question2,
                    "question3" : question3,
                    "question4" : question4
                }
                
                await collection.insertOne(userInfo);
                res.redirect('/')
            }
        }
    }
    else {
        //send them to an error page
    }
}
