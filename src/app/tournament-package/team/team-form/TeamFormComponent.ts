import { Component, Input } from "@angular/core"
import { TeamHolderService } from "../../service/TeamHolderService"
import { FormsModule } from "@angular/forms"


@Component({
  selector: "team-form",
  templateUrl: "team-form.html",
  styleUrls: ["../../tournament.scss"]
})

export class TeamFormComponent {

  model: string | undefined;

  public addTeam(): void {
    if (!this.model) {
      return;
    }
    TeamHolderService.addTeam(this.model);
    this.model = '';
  }

  clear() {
    TeamHolderService.clear()
  }
}
