



function setup() {
  createCanvas(900, 800);

  noStroke();
  angleMode(DEGREES);
}

function draw() {

  background(200,255,255);

  //cliffs
  fill(210,200,190);
  rect(0,height/2,width/3,height);
  rect(width*0.88,height/2,width,height);

  //grass
  fill(150,255,150);
  rect(0,height/2,width/3,10);
  rect(width*0.88,height/2,width,10);

  //sun
  fill(255,255,0);
  ellipse(200,100,50,50);

  //ramp
  fill(180,150,100);
  triangle(width/8,height/2, width/3-10, height/2, width/3-10,height/2.4);

   // first 2car
  displayCar(200,width/5-170,height/2-40,50,0);
  displayCar(200, width/5,height/2-60,100,-20);
  
   //top car
  displayCar(255,width/5 +200,height/2-120,150,-10);
  displayCar(255,width/5 +400,height/2-130,200,5);
  displayCar(255,width/5 +600,height/2-90,255,20);
  
  // failure car
  displayCar(0,width/5 +210,height/2-80,150,17);
  displayCar(0,width/5 +350,height/2+50,200,50);
  displayCar(0, width/5 +400,height/2+320,255,100);
  }

  function displayCar(colur,x1,y1,alphaA,r) {
    push();
        translate(x1,y1)
        rotate(r);
      
      // car body
        beginShape();
      fill(colur,100,200,alphaA);
      vertex(30,10);
      quadraticVertex(-25,-30,-60,+10);
      quadraticVertex( -100,+15,-75,+30);
      vertex(+50,+30);
      quadraticVertex(+85,+20,+30,+10);
    endShape();
    
      // front window
    beginShape();
      fill(190,255,255);
      vertex( +23, +10);
      quadraticVertex( -15,-20, -20, +5);
      quadraticVertex( -15, +10, +23, +10);    
    endShape();
      
      // back window
    beginShape();
      fill(190,255,255);
      vertex( -17, -7);
      quadraticVertex( -40, -7, -50, +5);
      quadraticVertex( -40, +2, -25, +5);
      quadraticVertex( -20, -5, -17, -7);
    endShape();  
    
      // wheels
    beginShape();
    fill(150,150,150,alphaA);
    ellipse( 25, 30,20,20);
    ellipse( -55, +30,20,20);
      
      pop();
    }