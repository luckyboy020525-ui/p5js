function setup() {
  createCanvas(600, 400);
}

function draw() {

  // ===== 과녁 배경 =====
  noStroke();

  fill(10, 5, 40);
  circle(300, 200, 900);

  fill(30, 20, 80);
  circle(300, 200, 750);

  fill(60, 30, 120);
  circle(300, 200, 600);

  fill(120, 50, 160);
  circle(300, 200, 450);

  fill(180, 80, 200);
  circle(300, 200, 300);

  fill(255, 150, 220);
  circle(300, 200, 150);

  // ===== 위쪽 달 =====
  fill('yellow');
  noStroke();
  circle(520, 60, 80);

  fill(10, 5, 40);
  circle(565, 60, 80);

  // ===== 위쪽 별 =====
  stroke(255);
  strokeWeight(1);

  point(23, 57);
  point(89, 12);
  point(176, 94);
  point(248, 33);
  point(319, 147);
  point(402, 21);
  point(478, 88);
  point(559, 39);
  point(67, 173);
  point(141, 65);
  point(215, 182);
  point(298, 118);
  point(365, 54);
  point(452, 166);
  point(530, 102);

  strokeWeight(3);

  point(45, 28);
  point(110, 136);
  point(189, 47);
  point(263, 159);
  point(334, 23);
  point(418, 97);
  point(492, 11);
  point(575, 141);
  point(72, 108);
  point(158, 24);
  point(236, 128);
  point(307, 76);
  point(389, 183);
  point(466, 52);
  point(548, 169);

  // ===== 바다 =====
  stroke(200, 200, 255);

  line(0, 295, 50, 280);
  line(50, 280, 100, 300);
  line(100, 300, 150, 285);
  line(150, 285, 200, 295);

  line(200, 295, 250, 280);
  line(250, 280, 300, 300);
  line(300, 300, 350, 285);
  line(350, 285, 400, 295);

  line(400, 295, 450, 280);
  line(450, 280, 500, 300);
  line(500, 300, 550, 285);
  line(550, 285, 600, 290);

  // ===== 돛대 =====
  stroke(90, 60, 40);
  strokeWeight(4);
  line(120, 250, 120, 140);

  // ===== 배 몸체 =====
  noStroke();
  fill(92, 64, 51);

  quad(
    100, 310,
    200, 310,
    250, 250,
    70, 250
  );

  // ===== 돛 =====
  fill(210, 220, 255);

  triangle(
    120, 140,
    120, 190,
    190, 175
  );

  // ===== 아래쪽 달 =====
  fill('yellow');
  noStroke();
  circle(520, 390, 80);

  fill(10, 5, 40);
  circle(565, 390, 80);

  // ===== 아래쪽 별 =====
  stroke(255);
  strokeWeight(1);

  point(40, 360);
  point(130, 345);
  point(220, 380);
  point(310, 355);
  point(500, 370);

  strokeWeight(3);

  point(90, 390);
  point(180, 350);
  point(270, 365);
  point(420, 340);
  point(560, 375);
}