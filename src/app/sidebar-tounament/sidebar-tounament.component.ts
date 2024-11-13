import { Component } from '@angular/core';
import { Competition } from "../models/competition.model"
import { Match } from "../models/match.model"
import { CompetitionService } from "../services/competition.service"
import { TournamentService} from "../tournament-package/service/TournamentService"

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar-tounament.component.html",
  styleUrls: ["./sidebar-tounament.component.scss"],
})
export class SidebarTounamentComponent {
  // Liste des tournois
  tournois: string[] = [];

  competitions: Competition[] | undefined
  matches: Match[] | undefined

  constructor(private competitionService : CompetitionService, private TournamentService: TournamentService) {
    this.Find();

  }
  Find() {
    this.competitionService.findAll().subscribe((data) => {
      console.log("Data", data);
      this.competitions = data;
      this.competitions.forEach(competition => {
        this.tournois.push(competition.name);
    });
    });
  }
  handleTournoiClick(tournoi: Competition): void {
    this.TournamentService.selectTournoi(tournoi);
  }
}
