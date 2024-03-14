import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: "cube",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./cube.component.html",
    styleUrls: ["./cube.component.scss"],
})
export class CubeComponent {
    @Input()
    public value: number = 1;
}
