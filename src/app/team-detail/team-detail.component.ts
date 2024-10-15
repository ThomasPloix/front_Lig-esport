import {Component, OnInit} from '@angular/core';
import {Team} from "../models/team.model";
import {ActivatedRoute} from "@angular/router";
import {TeamService} from "../services/team.service";
import {DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {PlayerDetailsComponent} from "../player-detail/player-detail.component";
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'team-detail',
  standalone: true,
    imports: [
        NgForOf,
        DatePipe,
        PlayerDetailsComponent,
        NgIf,
        NgClass
    ],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.scss'
})
export class TeamDetailComponent implements OnInit {

  team: Team | undefined;
  teams: Team[] = [];
  expandedPlayerIndex: number | null = null; // To track which player is expanded

  constructor(private route: ActivatedRoute, private teamService: TeamService) {}
  ngOnInit(): void {
    // Get the id from the route and fetch the region
    const teamId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(teamId);
    this.teamService.findById(teamId).subscribe((data) => {
      this.team = data;
      this.team.players.forEach((player) => {
          player.champion_prefs.forEach((champion) => {
            champion.image = `/assets/champions/${champion.name.replace(/ /g, "")}_0.jpg`;
          });
        });
      });
      console.log(this.team);
    }

  // Function to toggle player details
  togglePlayerDetails(index: number): void {
    // If the index is the same as the expandedPlayerIndex, collapse it; otherwise, expand it
    this.expandedPlayerIndex = this.expandedPlayerIndex === index ? null : index;
  }
}
