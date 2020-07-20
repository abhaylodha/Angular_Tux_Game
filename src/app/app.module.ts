import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { WarningComponent } from "./WarningAlert/WarningAlert.component";
import { SuccessComponent } from "./Success/Success.component";
import { LineComponent } from "./line/line.component";
import { PositionDirective } from "./line/position-directive";

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    LineComponent,
    PositionDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
