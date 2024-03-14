import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CubeComponent } from "src/app/cube/cube.component";

@Component({
    selector: "cubes",
    standalone: true,
    imports: [CommonModule, CubeComponent],
    templateUrl: "./cubes-container.component.html",
    styleUrls: ["./cubes-container.component.scss"],
})
export class CubesContainerComponent implements OnInit {
    protected cube1Vals = new BehaviorSubject<number>(1);
    protected cube2Vals = new BehaviorSubject<number>(1);
    protected cube3Vals = new BehaviorSubject<number>(1);

    public ngOnInit(): void {}

    public onCubeClick() {
        this.cube1Vals.next(getRandomInt(1, 6));
        this.cube2Vals.next(getRandomInt(1, 6));
        this.cube3Vals.next(getRandomInt(1, 6));
    }
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
