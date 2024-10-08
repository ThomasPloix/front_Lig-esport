import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"

import { RegionsComponent } from './regions/regions.component';
import {RegionsResolver} from "./regions/regionsResolver"; // Import the RegionsComponent


const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "regions",
    component: RegionsComponent,
    resolve: {
      regions: RegionsResolver,
    },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
