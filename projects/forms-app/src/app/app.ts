import { Component } from "@angular/core";
import { FormsLib } from "forms-lib";

@Component({
  selector: "app-root",
  imports: [FormsLib],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected title = "forms-app";
}
