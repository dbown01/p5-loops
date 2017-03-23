function setup(){
   createCanvas(600,400);
   background(255,192,203);
}

function draw(){
    strokeWeight(4);
    stroke(255);
   
    var x = 0;
    while(x<650){
    fill(179, 230, 255);
    ellipse(x, 255, 25, 25);
    x = x + 10;
}
    
    for(var x = 0; x < 650; x = x + 10){
        fill(179, 230, 255);
        ellipse(100, x , 25);
    }

}