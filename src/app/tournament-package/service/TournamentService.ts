import { Injectable } from '@angular/core';
import { CompetitionService } from "../../services/competition.service"

import { Competition } from "../../models/competition.model"
import { Match } from "../../models/match.model"
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  competition: Competition | undefined
  matches: Match[] | undefined

  private selectedTournoiSubject = new BehaviorSubject<any>(null);
  selectedTournoi$ = this.selectedTournoiSubject.asObservable();
  constructor(private competitionService : CompetitionService) {}


  selectTournoi(tournoi: Competition): void {
    this.selectedTournoiSubject.next(tournoi);
  }

  getMatches() {
    return this.matches;
  }
  clearTournament() {
  }

}
