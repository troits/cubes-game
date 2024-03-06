import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CubeComponent } from "src/app/cube/cube.component";
import { CubesContainerComponent } from "src/app/cubes/cubes-container.component";

@NgModule({
    declarations: [CubesContainerComponent, CubeComponent],
    imports: [CommonModule],
    exports: [CubesContainerComponent],
})
export class CubeModule {}
