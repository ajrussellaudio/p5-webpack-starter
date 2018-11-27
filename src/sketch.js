import "p5";
import "./main.css";

// window.preload = () => {
//   // preload images etc here
// }

window.setup = () => {
  createCanvas(window.innerWidth, window.innerHeight);
};

window.draw = () => {
  background("blue");
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
};
