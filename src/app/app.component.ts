import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CubesContainerComponent } from "./cubes/cubes-container.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [RouterOutlet, CubesContainerComponent], // Import dependencies directly
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "cubes-game";
}
