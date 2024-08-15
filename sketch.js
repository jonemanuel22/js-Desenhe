function setup() {
    createCanvas(600, 600);
    background('rgb(154,0,255)');
  
  }
  
  function draw() {
    
    stroke('black');
    fill('rgb(0,255,0)');
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
       rect(mouseX,mouseY,20,35);
    } 
  }