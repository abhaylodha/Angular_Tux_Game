import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LineUtils {
  elemId = "t";

  initialize(e: string) {
    this.elemId = e;
  }

  clearLine() {
    document.getElementById(this.elemId).innerHTML = "";
  }

  linedraw(x1, y1, x2, y2) {
    let tmp;

    if (x2 < x1) {
      tmp = x2;
      x2 = x1;
      x1 = tmp;
      tmp = y2;
      y2 = y1;
      y1 = tmp;
    }

    let lineLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let m = (y2 - y1) / (x2 - x1);

    let degree = (Math.atan(m) * 180) / Math.PI;

    document.getElementById(this.elemId).innerHTML =
      "<div class='line' style='transform-origin: top left; transform: rotate(" +
      degree +
      "deg); width: " +
      lineLength +
      "px; height: 1px; background: black; position: absolute; top: " +
      y1 +
      "px; left: " +
      x1 +
      "px;'></div>";
  }
}
