import {Component, OnInit} from '@angular/core';
import {Competition} from "../models/competition.model";
import {ActivatedRoute} from "@angular/router";
import {CompetitionService} from "../services/competition.service";
import {NgClass, NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'competition-detail',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,
    NgClass
  ],
  templateUrl: './competition-detail.component.html',
  styleUrl: './competition-detail.component.scss'
})
export class CompetitionDetailComponent implements OnInit {
  competition: Competition | undefined;

  constructor(private route: ActivatedRoute, private competitionService: CompetitionService) {}

  ngOnInit(): void {
    // Get the id from the route and fetch the competition
    const competitionId = Number(this.route.snapshot.paramMap.get('id'));
    this.competitionService.findById(competitionId).subscribe((data) => {
      this.competition = data.competitions[0];
      this.competition.matches.forEach((match) => {
        match.champions_picked.forEach((champion) => {
          champion.image = `/assets/champions/${champion.name.replace(/ /g, "")}_0.jpg`;
        });
      });
      console.log(this.competition);
    });
  }
}
