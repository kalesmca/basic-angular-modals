import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "basic-angular-modals";
  input1;
  input2;
  result = 0;
  save() {
    this.result = this.input1 + this.input2;
  }
}
