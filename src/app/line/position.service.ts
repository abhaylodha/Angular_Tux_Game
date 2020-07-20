import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class PositionService {
  constructor() {}

  public getWidth() {
    let position = document.getElementById("answerId").getBoundingClientRect();
    return position.x + position.width / 2;
  }

  public getHeight() {
    let position = document.getElementById("answerId").getBoundingClientRect();
    return position.y + position.height;
  }
}
