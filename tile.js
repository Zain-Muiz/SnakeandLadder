class Tile {
  constructor(x, y, wh, index, next, text) {
    this.x = x;
    this.y = y;
    this.wh = wh;
    this.text = text;
    // index and next
    // TODO: (next is probably redundant?)
    this.index = index;
    this.next = next;
    this.snadder = 0;
    // Checkboard pattern
    if (this.index % 2 == 0) {
      this.color = 200;
    } else {
      this.color = 100;
    }
  }

  // Find center
  getCenter() {
    let cx = this.x + this.wh / 2;
    let cy = this.y + this.wh / 2;
    // TODO: change to p5.Vector?
    return [cx, cy];
  }

  // Draw rectangle
  show(context) {
    fill(this.color);
    //context.globalAlpha = 1;
    noStroke();
    rect(this.x, this.y, this.wh, this.wh);
  }

  // Highlight over rectangle
  highlight() {
    fill(0, 0, 255, 100);
    noStroke();
    rect(this.x, this.y, this.wh, this.wh);
  }

  showMessage(context){
    if (this.snadder != 0) {
      //context = this.getContext('2d');
      let myCenter = this.getCenter();
      context.font = "20px Arial";
      if (this.snadder < 0) {
        context.fillStyle = "black";
      } else {
        context.fillStyle = "red";
      }
      //console.log(myCenter);
      context.fillText(this.text, myCenter[0] - 10, myCenter[1]);

    }
  }

  // If it's connected to another tile
  // with a snake or a ladder
  showSnadders() {
    if (this.snadder != 0) {
      let myCenter = this.getCenter();
      let nextCenter = tiles[this.index + this.snadder].getCenter();
      strokeWeight(4);
      if (this.snadder < 0) {
        stroke(255, 0, 0, 200);
      } else {
        stroke(0, 255, 0, 200);
      }
      line(myCenter[0], myCenter[1], nextCenter[0], nextCenter[1]);
    }
  }
}
