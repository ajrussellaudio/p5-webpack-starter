import "p5";

window.setup = () => {
  createCanvas(640, 480);
  background("red");
};

window.draw = () => {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
};
