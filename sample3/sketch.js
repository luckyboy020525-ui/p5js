/*********************************************
  1. mouse:
- 마우스 버튼 클릭시 캐릭터 우상단 농구공이 튕겨져 오르내리고를 반복함
	2. keyboard:
		- 키보드의 위아래 방향키를 누르면 게이지가 차고 오르며 배경, 표정이 바뀜.
        - 게이지가 차오를 수록 배경색이 따듯해지며 웃는표정으로, 반대로 내리면 표정이 화가 나며 차가운 배경으로 바뀜
***********************************************/	
let level = 4;

let ballActive = false;
let ballX = 340;
let ballY = 50;

let dirY = -6;

function setup() {
  createCanvas(400, 600);
}

function draw() {

  let bgR = map(level, 1, 7, 80, 255);
  let bgB = map(level, 1, 7, 255, 120);
  let bgG = map(level, 1, 7, 100, 180);
  background(bgR, bgG, bgB);

  fill(150);
  noStroke();
  rect(20, 35, 80, 10);
  fill(0);
  ellipse(20, 40, 30, 30);
  ellipse(100, 40, 30, 30);

  if (ballActive) {

    ballY += dirY;

    if (ballY < 45) {
      dirY *= -1;
    }

    if (ballY > height - 45) {
      dirY *= -1;
    }
  }

  fill(255, 165, 0);
  stroke(0);
  strokeWeight(2);
  ellipse(ballX, ballY, 90, 90);

  line(ballX - 45, ballY, ballX + 45, ballY);
  line(ballX, ballY - 45, ballX, ballY + 45);
  line(ballX - 20, ballY - 41, ballX - 20, ballY + 41);
  line(ballX + 20, ballY - 41, ballX + 20, ballY + 41);

  fill(230, 200, 170);
  noStroke();
  rect(170, 340, 60, 60);

  fill(255, 220, 190);
  ellipse(200, 250, 200, 230);

  fill(0);
  beginShape();
  vertex(100, 250);
  bezierVertex(200, 250, 150, 160, 200, 180);
  bezierVertex(250, 160, 200, 250, 300, 250);
  vertex(300, 150);
  vertex(200, 130);
  vertex(100, 150);
  endShape(CLOSE);

  fill(255);

  if (level >= 6) {
    arc(160, 245, 50, 25, 0, PI);
    arc(240, 245, 50, 25, 0, PI);
  } else if (level >= 3) {
    ellipse(160, 245, 30, 15);
    ellipse(240, 245, 30, 15);
  } else {
    rect(135, 240, 50, 5);
    rect(215, 240, 50, 5);
  }

  if (level >= 1 && level <= 5) {
    fill(0);
    ellipse(160, 245, 10, 10);
    ellipse(240, 245, 10, 10);
    
  } else if  (level > 5) {
    fill(0);
    ellipse(160, 250, 10, 10);
    ellipse(240, 250, 10, 10);}

  stroke(0);
  strokeWeight(3);

  if (level >= 6) {
    line(140, 220, 180, 210);
    line(220, 210, 260, 220);
  } else if (level >= 3) {
    line(140, 215, 180, 215);
    line(220, 215, 260, 215);
  } else {
    line(140, 210, 180, 225);
    line(220, 225, 260, 210);
  }

  noStroke();

  stroke(0);
  strokeWeight(2);
  line(200, 255, 200, 290);
  line(195, 290, 205, 290);

  noFill();
  stroke(0);
  strokeWeight(2);

  if (level >= 6) {
    arc(200, 320, 60, 40, 0, PI);
  } else if (level >= 4) {
    arc(200, 325, 50, 25, 0, PI * 0.9);
  } else if (level >= 3) {
    line(170, 320, 230, 320);
  } else {
    arc(200, 330, 60, 40, PI, TWO_PI);
  }

  noStroke();
  fill(255, 220, 190);
  ellipse(100, 250, 30, 65);
  ellipse(300, 250, 30, 65);

  fill(0, 0, 139);
  beginShape();
  vertex(140, 370);
  bezierVertex(0, 380, 0, 450, 140, 450);
  vertex(260, 450);
  bezierVertex(400, 450, 400, 380, 260, 370);
  endShape(CLOSE);

  fill(230, 200, 170);
  triangle(170, 370, 230, 370, 200, 420);

  let barX = 30;
  let barY = 100;
  let barH = 400;

  let gauge = 0;

  if (level == 1) gauge = 0;
  else if (level == 2) gauge = 60;
  else if (level == 3) gauge = 120;
  else if (level == 4) gauge = 180;
  else if (level == 5) gauge = 240;
  else if (level == 6) gauge = 300;
  else if (level == 7) gauge = 400;

  noStroke();
  fill(200);
  rect(barX, barY, 20, barH, 10);

  fill(255, 200, 0);
  rect(barX, barY + (barH - gauge), 20, gauge, 10);

  stroke(0);
  noFill();
  rect(barX, barY, 20, barH, 10);
}

function keyPressed() {

  if (keyCode === UP_ARROW) level += 1;
  if (keyCode === DOWN_ARROW) level -= 1;

  level = constrain(level, 1, 7);
if (key === 's') {
    saveGif('mySketch', 5);
  }
}

function mousePressed() {

  if (!ballActive) {
    ballActive = true;
    dirY = -6;
  }
}