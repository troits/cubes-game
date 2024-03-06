import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CubesContainerComponent } from "src/app/cubes/cubes-container.component";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, CubesContainerComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
