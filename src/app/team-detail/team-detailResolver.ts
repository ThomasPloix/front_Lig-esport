import { inject } from "@angular/core"
import { ResolveFn } from "@angular/router"
import {TeamService} from "../services/team.service";
import {Team} from "../models/team.model";

// export const TeamsResolver: ResolveFn<Team[]> = (id: number) => {
//     return inject(TeamService).findById(id)
// }