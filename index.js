let xini = 20;
let yini = 20;
let center = [xini, yini];
const iWidth = 20;

function setup() {
    createCanvas(800,1000);
}

function draw() {
    let xIni = 100;
    let yIni = 100;

    background(200);

    // window.setTimeout( () => {        
        drawL(xIni,yIni);
        yIni = yIni + iWidth;
        // clear();
    // }, 3000 );
}

function drawL(x, y){
    let color1 = color(255, 0, 0);
    fill(color1);
    rect(x,y-iWidth,iWidth,iWidth);
    
    let color2 = color(0, 255, 0);
    fill(color2);
    rect(x,y,iWidth,iWidth);

    fill(color1);
    rect(x, y+iWidth, iWidth, iWidth);

    fill(color2);
    rect(x+iWidth, y+iWidth, iWidth, iWidth);
}

