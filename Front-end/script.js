let url = "http://localhost:3000/api"
const canvas = document.getElementById("display");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

const drawData = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

    const loop = () =>{
        
    };


    let question1Info = {
        x : 0,
        y : 110,
        size: 40,
        color: "#530"
    }

    let question2Info = {
        x: 10,
        y: 120,
        size: 40, 
        color: "#111"
    }

    let question3Info = {
        x: 20,
        y: 130, 
        size: 40,
        color: "#0ff"
    }


};

canvas.addEventListener("load",drawData);