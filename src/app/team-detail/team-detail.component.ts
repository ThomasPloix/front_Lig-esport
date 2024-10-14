import {Component, OnInit} from '@angular/core';
import {Team} from "../models/team.model";
import {ActivatedRoute} from "@angular/router";
import {TeamService} from "../services/team.service";
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'team-detail',
  standalone: true,
    imports: [
        NgForOf,
        DatePipe
    ],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.scss'
})
export class TeamDetailComponent implements OnInit {

  team: Team | undefined;
  teams: Team[] = [];
  constructor(private route: ActivatedRoute, private teamService: TeamService) {}
  ngOnInit(): void {
    // Get the id from the route and fetch the region
    const teamId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(teamId);
    this.teamService.findById(teamId).subscribe((data) => {
      this.team = data;
      console.log(data);
    });
    // this.teamService.findAll().subscribe((data) => {
    //     this.teams = data;
    // });

  }
}
