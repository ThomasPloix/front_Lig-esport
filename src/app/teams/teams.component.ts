import { Component, OnInit } from '@angular/core';
import { Region } from "../models/region.model";
import { RegionService } from "../services/region.service";
import { TeamDetailComponent } from "../team-detail/team-detail.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'teams',
  standalone: true,
  imports: [
    TeamDetailComponent,
    NgForOf
  ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent implements OnInit {

  regions: Region[] = []; // List of regions, each containing their teams

  constructor(private regionService: RegionService) {}

  ngOnInit(): void {
    // Fetch regions which include their teams
    this.regionService.findAll().subscribe(data => {
      this.regions = data;
    });
  }
}
