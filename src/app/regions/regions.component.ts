import { Component, OnInit } from '@angular/core';
import { RegionService } from 'services/region.service';
import { Region } from 'models/region.model';
import { Team } from "../models/team.model"

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent implements OnInit {
  regions: Region[] = [];
  flipStates: boolean[] = [];

  constructor(private regionService: RegionService) {}

  ngOnInit(): void {
    this.loadRegions();
  }

  loadRegions(): void {
    this.regionService.findAll().subscribe(
        (data) => {
          this.regions = data;
          this.flipStates = new Array(this.regions.length).fill(false);
        },
        (error) => {
          console.error('Error fetching regions:', error);
        }
    );
  }

  // Method to flip the card
  flipCard(index: number): void {
    this.flipStates[index] = !this.flipStates[index];
  }

  // Helper function to divide teams into rows of two columns
  getRows(teams: Team[]): Team[][] {
    const rows: Team[][] = [];
    for (let i = 0; i < teams.length; i += 5) {
      rows.push(teams.slice(i, i + 5)); // Take 5 teams per row
    }
    return rows;
  }


}


