import { Injectable } from '@angular/core';
import { CompetitionService } from "../../services/competition.service"
import { Competition } from "../../models/competition.model"
import { Match } from "../../models/match.model"

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  competition: Competition | undefined
  matches: Match[] | undefined

  constructor(private competitionService : CompetitionService) {}

  generateTree() {
  this.competitionService.findById(3).subscribe((data) => {

    this.matches = this.competition?.matches;
    this.competition = data;
  });
  }

  clearTournament() {

  }


  // Autres méthodes qui gèrent les interactions entre TreeManager et TeamHolderService
}
