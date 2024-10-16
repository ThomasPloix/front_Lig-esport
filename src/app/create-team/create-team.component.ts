import {Component, OnInit} from '@angular/core';
import {Team} from "../models/team.model";
import {Player} from "../models/player.model";
import{TeamService} from "../services/team.service";
import {PlayerService} from "../services/player.service";
import {Router} from "@angular/router";
import { RegionService } from "../services/region.service"
import { Region } from "../models/region.model"

@Component({
  selector: 'create-team',
  templateUrl: './create-team.component.html',
  styleUrl: './create-team.component.scss'
})
export class CreateTeamComponent implements OnInit {
  team: Team = { name: '', description: '', logo: '',partners:'',creation_date:'',players: [], lieu:'', region_id:1 };
  allPlayers: Player[] = [];
  regions: Region[] = [];
    constructor(private teamService: TeamService, private router: Router, private playerService: PlayerService,
                private regionService: RegionService
        ) {}

  ngOnInit(): void {

      this.regionService.findAll().subscribe((regions) => {
      this.regions = regions;
      });
    // Fetch existing teams from the backend
    this.playerService.findAll().subscribe((players) => {
      this.allPlayers = players;
    });
  }

  createTeam() {
    // Submit the team with the selected teams and generated matches
    this.teamService.createTeam(this.team).subscribe(
        (response) => {
          console.log('Team created successfully', response);
        },
        (error) => {
          console.error('Error creating team', error);
        }
    );
  }
}
