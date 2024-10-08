import { Component, OnInit } from '@angular/core';
import { RegionService } from 'services/region.service'; // Adjust the path based on your structure
import { Region } from 'models/region.model';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent implements OnInit {
  regions: Region[] = [];

  constructor(private regionService: RegionService) {}

  ngOnInit(): void {
    this.loadRegions();
  }

  loadRegions(): void {
    this.regionService.findAll().subscribe(
        (data) => {
          this.regions = data;
        },
        (error) => {
          console.error('Error fetching regions:', error);
        }
    );
  }
}

