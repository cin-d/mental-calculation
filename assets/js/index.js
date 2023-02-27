window.addEventListener('load', init)
//Dans ma fenêtre, je met un écouteurs d'évènement afin de 'init' mon canvas
let stage;
// Je déclare une variable indéfini, qu'on définira plus tard 
let myCircleExemple;

function init() {
    //Je fais une fonction
    let canvas = document.querySelector('.myCanvas');
    
    stage = new createjs.Stage(canvas);

    createCircle(200, 150, 30, "red")
    createCircle(400, 250, 15, "blue")
    createCircle(300, 400, 8, "green")

    // myCircleExemple.isUnlocked = true;
    // myCircleExemple.addEventListener("click", () => {
    //     myCircleExemple.isUnlocked = false; 
    // })

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", () => {
        // if (myCircleExemple.isUnlocked) {
        //     myCircleExemple.x += 1;
        // }
        stage.update();
    })
}

function createCircle(myX, myY, myRadius, myColor) {
    let circle = new createjs.Shape();
    circle.graphics.beginFill(myColor).drawCircle(0, 0, myRadius);
    circle.x = myX;
    circle.y = myY;
    circle.myName = 'cercle de couleur' + myColor; 
    stage.addChild(circle);

    circle.addEventListener('click', (event) => {
        console.log(event.currentTarget.myName);
    })


    return circle;
}