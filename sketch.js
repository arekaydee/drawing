//Your Drawing

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
background(100);

  translate(100,200);
  noStroke();
    fill(200,200,200);
    rect(50,-200,240,350);//back wall
    fill(190,190,190);
    quad(-100,-200,-100,270,50,150,50,-200);//left wall
    fill(180,180,180);
    quad(-100,270,50,150,290,150,550,270);//floor
    fill(150,150,150);
    quad(100,190,30,250,300,250,200,190);//chair shadow
    rect(-100,270,650,600);//base face

    fill(230,0,0);
    rect(80,130,5,100);//left leg front
    fill(190,0,0);
    quad(85,130,85,230,90,225,90,130);

    fill(230,0,0);
    rect(215,130,5,100);//right leg front
    fill(190,0,0);
    quad(215,130,215,230,210,225,210,130);

    fill(180,0,0);
    rect(110,100,5,100); //left leg rear
    fill(150,0,0);
    quad(115,100,115,200,120,195,120,100);

    fill(180,0,0);
    rect(185,100,5,100); //right leg rear
    fill(150,0,0);
    quad(185,100,185,200,180,195,180,100);

    fill(250,0,0);
    quad(110,100,80,120,220,120,190,100);//seat top
    fill(210,0,0);
    rect(80,120,140,10);//seat front

    rect(110,20,5,80);//chair back left
    fill(150,0,0);
    quad(115,0,115,100,120,100,120,0);

    fill(210,0,0);
    rect(185,20,5,80);//chair back right
    fill(170,0,0);
    quad(180,0,180,100,185,100,185,0);

    fill(250,0,0);
    rect(100,-10,100,60);//chair back
    fill(120,0,0);
    quad(100,50,105,55,195,55,200,50);

    strokeWeight(3);
    stroke(220,0,0);
    line(110,0,190,0);//chair back detail

    fill(220,0,0);
    ellipse(115,15,3,3);//chair bolts
    ellipse(115,40,3,3);
    ellipse(185,15,3,3);
    ellipse(185,40,3,3);




}
