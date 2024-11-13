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

  generateTree(competition: Competition) {
  //   this.competitionService.findById(3).subscribe((data) => {
  //
  //   this.matches = this.competition?.matches.sort((a, b) => {
  //     return a.order_match - b.order_match });
  //   this.competition = data;
  // });
    this.competition = competition;
  }



  getMatches() {
    return this.matches;
  }
  clearTournament() {
  }

}
