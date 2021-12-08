let url = "http://localhost:3000/api"
const canvas = document.getElementById("display");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;


let question1Info = {
    x : 0,
    y : 0,
    w: 10,
    height: 30,
    color: "#530"
}

let question1Info2 = {
    x: 0,
    y: 100,
    w: 10,
    height: 30, 
    color: "#111"
}

let question1Info3 = {
    x: 0,
    y: 200, 
    w: 10,
    height: 30,
    color: "#0ff"
}



const drawData = (data) => {
    let dragon = 0
    let rabbit = 0
    let dog = 0;
    let bull = 0

    const loop = (num) =>{
        
        for(let i = 0; i < data.length; i++)
        {
            if(i == "Dragon"){ dragon += 1 }
            if(i == "Rabbit"){ rabbit += 1 }
            if(i == "Dog"){ dog += 1 }
            if(i == "Bull"){ bull += 1 }
        }
        
        if(num == 1){
            ctx.fillStyle = question1Info.color
            ctx.fillRect(question1Info.x,question1Info.y,question1Info.w,question1Info.height)
            question1Info.w += dragon * 100
        }

        if(num == 2){
            ctx.fillStyle = question1Info2.color
            ctx.fillRect(question1Info2.x,question1Info2.y,question1Info2.w,question1Info2.height)
            question1Info2.w += rabbit * 100
        }
        if(num == 3){
            ctx.fillStyle = question1Info3.color
            ctx.fillRect(question1Info3.x,question1Info3.y,question1Info3.w,question1Info3.height)
            question1Info3.w += dog * 100
        }
        if(num == 4){
            if(question1Info.w > 0) question1Info.x = bull - question1Info.height 
        }
    };

    setInterval(loop(1),10)
    setInterval(loop(2),10)
    setInterval(loop(3),10)
};



fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    drawData(data)
});
