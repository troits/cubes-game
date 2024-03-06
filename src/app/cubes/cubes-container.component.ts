import { Component } from "@angular/core";
import { CubeComponent } from "src/app/cube/cube.component";

@Component({
    selector: "cubes",
    standalone: true,
    imports: [CubeComponent],
    templateUrl: "./cubes-container.component.html",
    styleUrls: ["./cubes-container.component.scss"],
})
export class CubesContainerComponent {}
