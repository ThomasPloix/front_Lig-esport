import { Component } from "@angular/core"
import { Link } from "models/links.model"

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: Link[] = []

  constructor() {
    this.links.push({ name: "Regions", href: "regions" })
    this.links.push({ name: "Teams", href: "teams/1" })
    this.links.push({ name: "Equipe ", href: "teamstournament" })
    this.links.push({ name: "Tournament", href: "treetournament" })}
}
