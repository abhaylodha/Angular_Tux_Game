import {
  Component,
  OnInit,
  HostListener,
  AfterContentInit,
  OnDestroy,
} from "@angular/core";
import { LineUtils } from "./lineutils.service";
import { PositionService } from "./position.service";

@Component({
  selector: "app-line",
  templateUrl: "./line.component.html",
  styleUrls: ["./line.component.css"],
})
export class LineComponent implements OnInit, AfterContentInit, OnDestroy {
  screenHeight;
  screenwidth;
  intervalID;
  ch1 = "1";
  ch2 = "2";
  ch3 = "3";
  ch4 = "4";
  p1: DOMRect;
  p2: DOMRect;
  p3: DOMRect;
  p4: DOMRect;
  answer = "";
  i = 0;
  shotAudio = new Audio();
  backgroundAudio = new Audio();

  constructor(
    private lineSvc: LineUtils,
    private positionSvc: PositionService
  ) {
    lineSvc.initialize("lineId");
    this.shotAudio.src = "../../assets/audio/chiming_music.mp3";
    this.shotAudio.load();
  }

  ngAfterContentInit() {
    //    this.drawline();
    this.backgroundAudio.src = "../../assets/audio/welcome_music.mp3";
    this.backgroundAudio.load();
    this.playBackgroundMusic();
  }

  ngOnInit(): void {
    this.screenwidth = window.innerWidth;
    this.screenHeight = window.innerHeight - 100;

    this.p1 = document.getElementById("ch1").getBoundingClientRect();
    this.p2 = document.getElementById("ch2").getBoundingClientRect();
    this.p3 = document.getElementById("ch3").getBoundingClientRect();
    this.p4 = document.getElementById("ch4").getBoundingClientRect();
  }

  drawline(x, y) {
    const midX = this.positionSvc.getWidth(); //this.screenwidth / 2;
    const bottomY = this.positionSvc.getHeight();

    this.lineSvc.clearLine();
    this.clearIntervalVal();

    this.lineSvc.linedraw(x, y, midX, bottomY);
    this.intervalID = setInterval(() => {
      this.lineSvc.clearLine();
      this.clearIntervalVal();
    }, 1500);
  }

  clearIntervalVal() {
    if (this.intervalID) clearInterval(this.intervalID);
  }

  ngOnDestroy() {
    this.clearIntervalVal();
  }

  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    //console.log(event.key);
    this.answer += event.key;
    if (event.key === "Enter") {
      if (this.answer == "1Enter") {
        this.drawline(this.p1.x, this.p1.y + this.p1.height / 2);
      }
      if (this.answer == "2Enter") {
        this.drawline(this.p2.x, this.p2.y + this.p2.height / 2);
      }
      if (this.answer == "3Enter") {
        this.drawline(this.p3.x, this.p3.y + this.p3.height / 2);
      }
      if (this.answer == "4Enter") {
        this.drawline(this.p4.x, this.p4.y + this.p4.height / 2);
      }
      this.answer = "";
      this.playShotMusic();
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.screenwidth = window.innerWidth;
    this.screenHeight = window.innerHeight - 100;
  }

  playShotMusic() {
    this.shotAudio.play();

    let interval = setInterval(() => {
      this.shotAudio.pause();
      if (interval) {
        clearInterval(interval);
      }
    }, 4000);
  }

  playBackgroundMusic() {
    this.backgroundAudio.play();
    //this.backgroundAudio.addEventListener("ended",)
  }
}
