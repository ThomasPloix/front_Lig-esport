import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"

import { RegionsComponent } from './regions/regions.component';
import {RegionsResolver} from "./regions/regionsResolver";
// import {TeamsResolver} from "./team-detail/team-detailResolver";
import {RegionDetailComponent} from "./region-detail/region-detail.component";
import {TeamDetailComponent} from "./team-detail/team-detail.component"; // Import the RegionsComponent


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'regions/:id', component: RegionDetailComponent }, // Detail route for a specific region
  { path: 'teams/:id', component: TeamDetailComponent }, // Detail route for a specific team
  { path: '', redirectTo: '/regions', pathMatch: 'full' },  // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
