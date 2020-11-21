var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particle;
var count;
var turn = 0;

var gameState = "play";

var divisionHeight = 300;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    );
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black");
  textSize(20);
  //text("Score : "+score,20,30);
  Engine.update(engine);

  fill("white");
  // text("500", 25, 520);
  // text("500", 100, 520);
  // text("500", 185, 520);
  // text("300", 265, 520);
  // text("200", 345, 520);
  // text("500", 425, 520);
  // text("400", 505, 520);
  // text("100", 585, 520);
  // text("300", 660, 520);
  // text("400", 740, 520);

  text("100", 20, 530);
  text("100", 100, 530);
  text("100", 180, 530);
  text("100", 260, 530);
  text("500", 340, 530);
  text("500", 420, 530);
  text("500", 500, 530);
  text("200", 580, 530);
  text("200", 660, 530);
  text("200", 740, 530);

  if (turn < 5) {
    text("Score : " + score, 100, 50);
  }

  //if (turn <= 6) {
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
    // if (particle != null) {
    //   //   particle.display();
    //   //   if (particle.body.position.y > 760) {
    //   //     if (particle.body.position.x < 300) {
    //   //       score = score + 500;
    //   //       particle = null;
    //   //       if (count >= 5) gameState = "end";
    //   //     }
    //   //   }
    //}
    {
      if (particle != null) {
        particle.display();
        if (particle.body.position.y > 680) {
          if (particle.body.position.x < 300) {
            score = score + 100;
            particle = null;
            turn = turn + 1;
            if (turn >= 5) gameState = "end";
          }
        }
      }

      if (particle != null) {
        particle.display();
        if (particle.body.position.y > 680) {
          if (
            particle.body.position.x > 301 &&
            particle.body.position.x < 600
          ) {
            score = score + 500;
            particle = null;
            turn = turn + 1;
            if (turn >= 5) gameState = "end";
          }
        }
      }

      if (particle != null) {
        particle.display();
        if (particle.body.position.y > 680) {
          if (
            particle.body.position.x > 601 &&
            particle.body.position.x < 900
          ) {
            score = score + 200;
            particle = null;
            turn = turn + 1;
            if (turn >= 5) gameState = "end";
          }
        }
      }

      // if (
      //   score >= 100 ||
      //   score >= 200 ||
      //   score >= 300 ||
      //   score >= 400 ||
      //   score >= 500
      // ) {
      //   turn = turn + 1;
      // }

      for (var j = 0; j < particles.length; j++) {
        particles[j].display();
      }
      for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
      }
    }

    if (turn === 5) {
      textSize(30);
      fill("red");
      text("GAMEOVER!! Refresh to try Again! Score : " + score, 120, 230);

      //}
      // if (frameCount % 60 === 0) {
      //   particles.push(
      //     new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10)
      //   );
      //   score++;
    }
  }
}

function mousePressed() {
  if (gameState !== "end") {
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}
