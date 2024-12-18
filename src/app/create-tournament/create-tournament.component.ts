import { Component, OnInit } from '@angular/core';
import {  Team } from '../models/team.model';
import { Competition } from '../models/competition.model';
import { Match } from '../models/match.model';
import { TeamService } from 'services/team.service';
import { CompetitionService } from 'services/competition.service';
import {Router} from "@angular/router";
import {Region} from "../models/region.model";
import {RegionService} from "../services/region.service";

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {
  tournament: Competition = { name: '', region: 1,  teams_compete: [], matches: []};
  allTeams: Team[] = [];
  selectedTeams: Team[] = [];
  regions: Region[] = [];

  constructor(private teamService: TeamService, private tournamentService: CompetitionService, private regionService: RegionService,private router: Router) {}

  ngOnInit(): void {
    this.regionService.findAll().subscribe((regions) => {
      this.regions = regions;
    });
    // Fetch existing teams from the backend
    this.teamService.findAll().subscribe((teams) => {
      this.allTeams = teams;
    });
  }

  toggleTeamSelection(team: Team) {
    const index = this.selectedTeams.indexOf(team);
    if (index > -1) {
      // Deselect the team
      this.selectedTeams.splice(index, 1);
    } else {
      // Select the team
      this.selectedTeams.push(team);
    }
    this.generateMatches();
  }

  generateMatches() {
    // Clear previous matches
    this.tournament.matches = [];

    // If there are at least two teams selected, generate matches
    if (this.selectedTeams.length > 1) {
      for (let i = 0; i < this.selectedTeams.length - 1; i++) {
        for (let j = i + 1; j < this.selectedTeams.length; j++) {
          const match: Match = {
            team1: this.selectedTeams[i],
            team2: this.selectedTeams[j],
            order_match: 0,
            date: '',
            result: false,
            score: 0,
            champions_picked: []
          };
          this.tournament.matches.push(match);
        }
      }
    }
  }

  createTournament() {
    // Submit the tournament with the selected teams and generated matches
    this.tournament.teams_compete = this.selectedTeams;
    console.log('Creating tournament', this.tournament);
    this.tournamentService.createTournament(this.tournament).subscribe(
        (response) => {
          console.log('Tournament created successfully', response);
        },
        (error) => {
          console.error('Error creating tournament', error);
        }
    );
  }
}
