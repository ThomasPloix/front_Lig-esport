import { Component, Input } from "@angular/core"
import { TeamModel } from "../model/TeamModel"
import { TeamHolderService } from "../service/TeamHolderService"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "team",
  templateUrl: "team.html",
  styleUrls: ["../tournament.scss"]
})
export class TeamComponent {

  // @ts-ignore
  @Input() team: TeamModel;
  public edition: boolean = false;

  public remove() {
    if (this.team) {
      TeamHolderService.removeTeam(this.team)
    }
  }

  public edit() {
    this.edition = true;
  }
}
