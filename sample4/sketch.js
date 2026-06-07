let stars = [];
let raindrops = [];
let snowflakes = [];

let snowAcc = 0;
let snowAlpha = 0;

function setup() {
  createCanvas(600, 400);

  stars = [
    [23,57,1],[89,12,1],[176,94,1],[248,33,1],[319,147,1],
    [402,21,1],[478,88,1],[559,39,1],[67,173,1],[141,65,1],
    [215,182,1],[298,118,1],[365,54,1],[452,166,1],[530,102,1],

    [45,28,3],[110,136,3],[189,47,3],[263,159,3],[334,23,3],
    [418,97,3],[492,11,3],[575,141,3],[72,108,3],[158,24,3],
    [236,128,3],[307,76,3],[389,183,3],[466,52,3],[548,169,3],

    [40,360,1],[130,345,1],[220,380,1],[310,355,1],[500,370,1],

    [90,390,3],[180,350,3],[270,365,3],[420,340,3],[560,375,3]
  ];

  for (let i = 0; i < 120; i++) {
    raindrops.push({
      x: random(width),
      y: random(-400, 400),
      speed: random(6, 12)
    });
  }

  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: random(width),
      y: random(-400, 400),
      size: random(2, 6),
      speed: random(1, 3)
    });
  }
}

function draw() {

  let t = frameCount * 0.01;


  let cycle = (frameCount % 200) / 200;
  let dayType = floor(frameCount / 200) % 3;

  let isMoon = cycle < 0.5;

  let isSnow = (!isMoon && dayType == 2);
  let isSunny = (!isMoon && dayType == 0);

 
  if (isSnow) snowAcc += 0.15;
  if (isSunny) snowAcc -= 0.25;

  snowAcc = constrain(snowAcc, 0, 25);

  snowAlpha = map(snowAcc, 0, 25, 0, 220);


  let nightColor = color(22, 8, 64);
  let yellowColor = color(255, 220, 120);
  let orangeColor = color(255, 140, 70);
  let redColor = color(220, 60, 60);

  if (isMoon) background(nightColor);
  else {
    let sunProgress = map(cycle, 0.5, 1, 0, 1);

    let bg;
    if (sunProgress < 0.25) bg = lerpColor(nightColor, yellowColor, sunProgress * 4);
    else if (sunProgress < 0.5) bg = lerpColor(yellowColor, orangeColor, (sunProgress - 0.25) * 4);
    else if (sunProgress < 0.75) bg = lerpColor(orangeColor, redColor, (sunProgress - 0.5) * 4);
    else bg = lerpColor(redColor, nightColor, (sunProgress - 0.75) * 4);

    background(bg);
  }


  if (isMoon) {
    stroke(255);
    for (let s of stars) {
      strokeWeight(s[2]);
      point(s[0], s[1]);
    }
  }

  
  if (!isMoon) {

    if (dayType == 1) {
      stroke(180, 220, 255);
      strokeWeight(2);

      for (let r of raindrops) {
        line(r.x, r.y, r.x - 5, r.y + 15);
        r.y += r.speed;

        if (r.y > height) {
          r.y = random(-200, 0);
          r.x = random(width);
        }
      }
    }

    if (dayType == 2) {
      noStroke();
      fill(255);

      for (let s of snowflakes) {
        circle(s.x, s.y, s.size);

        s.y += s.speed;
        s.x += sin(frameCount * 0.02 + s.y * 0.01);

        if (s.y > height) {
          s.y = random(-200, 0);
          s.x = random(width);
        }
      }
    }
  }


  stroke(200, 200, 255);
  strokeWeight(2);

  for (let x = 0; x < width; x += 50) {
    let y1 = 290 + sin(t * 2 + x * 0.03) * 10;
    let y2 = 290 + sin(t * 2 + (x + 50) * 0.03) * 10;
    line(x, y1, x + 50, y2);
  }

 
  if (isMoon) {

    let moonProgress = map(cycle, 0, 0.5, 0, 1);
    let moonAngle = map(moonProgress, 0, 1, PI, TWO_PI);

    let moonX = 300 + cos(moonAngle) * 360;
    let moonY = 350 + sin(moonAngle) * 260;

    fill('yellow');
    noStroke();
    circle(moonX, moonY, 80);

    fill(22, 8, 64);
    circle(moonX + 45, moonY, 80);

    fill('yellow');
    circle(moonX, 390, 80);

    fill(22, 8, 64);
    circle(moonX + 45, 390, 80);
  }

  else {

    let sunProgress = map(cycle, 0.5, 1, 0, 1);
    let sunAngle = map(sunProgress, 0, 1, PI, TWO_PI);

    let sunX = 300 + cos(sunAngle) * 360;
    let sunY = 350 + sin(sunAngle) * 260;

    let sunSize = map(sunY, 350, 90, 50, 120);

    fill(255, 200, 0);
    noStroke();
    circle(sunX, sunY, sunSize);
  }


  let boatX = (frameCount * 0.4) % 850 - 180;
  let boatY = sin(t) * 8;

  stroke(120);
  strokeWeight(3);
  line(boatX + 120, 250 + boatY, boatX + 120, 140 + boatY);

  noStroke();
  fill(92, 64, 51);

  let deckY = 250 + boatY;

  quad(
    boatX + 100, deckY + 60,
    boatX + 200, deckY + 60,
    boatX + 250, deckY,
    boatX + 70, deckY
  );

  fill(210, 220, 255);

  triangle(
    boatX + 120, 140 + boatY,
    boatX + 120, 190 + boatY,
    boatX + 190, 175 + boatY
  );

 
  if (snowAcc > 0.1) {

    fill(255, 255, 255, snowAlpha);

    quad(
      boatX + 105, deckY + 5,
      boatX + 195, deckY + 5,
      boatX + 235, deckY - 5,
      boatX + 80, deckY - 5
    );
  }
}


function keyPressed() {
  if (key === 's') {
    saveGif("과제4", 10);
  }
}

