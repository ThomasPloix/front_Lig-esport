import { TeamModel } from "../../model/TeamModel"
import { TeamHolderService } from "../../service/TeamHolderService"
import { Component } from "@angular/core"

@Component({
  selector: "team-management-view",
  templateUrl: "./team-management.html",
  styleUrls: ["../../tournament.scss"]
})

export class TeamManagementView {

  public teams: TeamModel[] = []

  ngOnInit() {
    this.teams = TeamHolderService.teams;
  }

  isFilled() {
    return TeamHolderService.isFilled()
  }
}
