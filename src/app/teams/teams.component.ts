import {Component, OnInit} from '@angular/core';
import {Team} from "../models/team.model";
import {ActivatedRoute} from "@angular/router";
import {TeamService} from "../services/team.service";
import {TeamDetailComponent} from "../team-detail/team-detail.component";

@Component({
  selector: 'teams',
  standalone: true,
  imports: [
    TeamDetailComponent
  ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent implements OnInit {

  teams: Team [] = [];

  constructor(private route: ActivatedRoute, private teamService: TeamService) {}

  ngOnInit(): void {
        this.teamService.findAll().subscribe(data => {
          this.teams = data;
        })
    }
}
