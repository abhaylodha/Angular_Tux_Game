import { Directive, ElementRef, OnInit } from "@angular/core";
import { PositionService } from "./position.service";

@Directive({
  selector: "[positionDirective]",
})
export class PositionDirective implements OnInit {
  constructor(
    private elemRef: ElementRef,
    private positionSvc: PositionService
  ) {}

  ngOnInit() {
    //this.elemRef.nativeElement.style.position = "absolute";
    //this.elemRef.nativeElement.style.top = window.screen.height + "px";
    //this.elemRef.nativeElement.style.left = window.screen.width / 2 + "px";

    alert(this.elemRef.nativeElement.style.top);
    alert(this.elemRef.nativeElement.style.left);
  }
}
