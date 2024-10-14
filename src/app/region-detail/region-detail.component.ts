import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from '../services/region.service'; // Update path accordingly
import { Region } from 'models/region.model'; // Update path accordingly

@Component({
  selector: 'app-region-detail',
  templateUrl: './region-detail.component.html',
  styleUrls: ['./region-detail.component.scss'],
})
export class RegionDetailComponent implements OnInit {
  region: Region | undefined;

  constructor(private route: ActivatedRoute, private regionService: RegionService) {}

  ngOnInit(): void {
    // Get the id from the route and fetch the region
    const regionId = Number(this.route.snapshot.paramMap.get('id'));
    this.regionService.findById(regionId).subscribe((data) => {
      this.region = data;
      console.log(data);
    });
  }
}

