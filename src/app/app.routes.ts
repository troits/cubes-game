import { Routes } from "@angular/router";
import { CubesContainerComponent } from "./cubes/cubes-container.component";

export const routes: Routes = [
  { path: "", redirectTo: "cubes", pathMatch: "full" },
  { path: "cubes", component: CubesContainerComponent },
];
