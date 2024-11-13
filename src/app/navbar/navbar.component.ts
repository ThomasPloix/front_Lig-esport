import { Component } from "@angular/core"
import { Link } from "models/links.model"
import {Router} from "@angular/router"

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: Link[] = []
  searchQuery: string = ''; // Two-way data binding for search input

  constructor(private router: Router) {
    this.links.push({ name: "Regions", href: "regions" })
    this.links.push({ name: "Teams", href: "teams/1" })
    // this.links.push({ name: "Equipe ", href: "teamstournament" })
    this.links.push({ name: "Tournament", href: "treetournament" })
    this.links.push({ name: "Create Tournament", href: "createtournament" })
    this.links.push({ name: "ADMIN", href: "admin" })
  }

  // Handle search input and navigation logic
  onSearch(): void {
    const query = this.searchQuery.trim().toLowerCase();
    if (query) {
      // Check if the search matches certain entities and navigate accordingly
      if (query === 'regions') {
        this.router.navigate(['/regions']);
      } else if (query === 'teams') {
        this.router.navigate(['/teams/1']);
      } else if (query === 'tournament') {
        this.router.navigate(['/treetournament']);
      }
      // You can extend this to search players, or more specific pages
    }
  }
}
