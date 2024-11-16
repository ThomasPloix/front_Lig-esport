import {Component, OnInit} from "@angular/core"
import { Link } from "models/links.model"
import {Router} from "@angular/router"
import {Team} from "../models/team.model";
import {TeamService} from "../services/team.service";
import {Region} from "../models/region.model";
import {RegionService} from "../services/region.service";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  links: Link[] = []
  teams: Team[] = []
  regions: Region[] = []
  searchQuery: string = ''; // Two-way data binding for search input


  constructor(private router: Router, private TeamService: TeamService, private RegionService: RegionService) {
    this.links.push({ name: "Regions", href: "regions" })
    this.links.push({ name: "Teams", href: "teams" })
    this.links.push({ name: "Tournament", href: "treetournament" })
    this.links.push({ name: "ADMIN", href: "admin" })
  }
  ngOnInit(): void {
    this.loadTeams();
    this.loadRegions();
  }

  // Handle search input and navigation logic
  onSearch(): void {
    const query = this.searchQuery.trim().toLowerCase();
    const matchingTeam = this.teams.find(team => team.name.toLowerCase() === query);
    const matchingRegion = this.regions.find(region => region.name.toLowerCase() === query);
    if (query) {
      // Check if the search matches certain entities and navigate accordingly
      if (query === 'regions') {
        this.router.navigate(['/regions']);
      } else if (query === 'teams') {
        this.router.navigate(['/teams']);
      } else if (query === 'tournament') {
        this.router.navigate(['/treetournament']);
      }
      else if (matchingTeam) {
        this.router.navigate([`/teams/${matchingTeam.id}`]);
      }
      else if (matchingRegion) {
        this.router.navigate([`/regions/${matchingRegion.id}`]);
      }

    }
  }

  loadTeams(): void {
    this.TeamService.findAll().subscribe(
        (data) => {
          this.teams = data;
        },
        (error) => {
          console.error('Error fetching teams:', error);
        }
    );
  }
  loadRegions(): void {
    this.RegionService.findAll().subscribe(
        (data) => {
          this.regions = data;
        },
        (error) => {
          console.error('Error fetching regions:', error);
        }
    );
  }
}
