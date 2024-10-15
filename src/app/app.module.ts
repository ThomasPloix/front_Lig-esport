import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NavbarComponent } from "navbar/navbar.component"
import { MatListModule } from "@angular/material/list"
import { HomeComponent } from "home/home.component"
import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { HttpClientModule } from "@angular/common/http"
import {ClickerGameComponent} from "./clicker-game/clicker-game.component";
import {RegionsComponent} from "./regions/regions.component";
import {RegionDetailComponent} from "./region-detail/region-detail.component";
import { NgOptimizedImage } from "@angular/common";
import { TreeView } from "./tournament-package/tree/TreeView"
import { NodeComponent } from "./tournament-package/node/NodeComponent"
import { OverlayDirective } from "./tournament-package/directive/OverlayDirective"
import { TeamManagementView } from "./tournament-package/team/team-management/TeamManagementView"
import { TeamComponent } from "./tournament-package/team/TeamComponent"
import { TeamFormComponent } from "./tournament-package/team/team-form/TeamFormComponent"
import { CreateTournamentComponent} from "./create-tournament/create-tournament.component";
import {CreateTeamComponent} from "./create-team/create-team.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        RegionsComponent,
        RegionDetailComponent,
        ClickerGameComponent,
        CreateTournamentComponent,
        CreateTeamComponent,

      TreeView,
      NodeComponent,
      TeamManagementView,
      TeamComponent,
      TeamFormComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    NgOptimizedImage,
    OverlayDirective,

    // Configure InMemoryWebApi for the app
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
