import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Region } from "models/region.model";
import { HttpClient } from "@angular/common/http";
import { Team } from "../models/team.model"

@Injectable({
  providedIn: "root",
})
export class RegionService {
  private regionsUrl = "api/regions"; // Note the "api/" prefix here

  constructor(private http: HttpClient) {}

  findAll(): Observable<Region[]> {
    return this.http.get<Region[]>(this.regionsUrl);
  }

  findById(id: number): Observable<Region> { // Change id to bigint
    return this.http.get<Region>(`${this.regionsUrl}/${id}`);
  }

  update(id: number, region: Region): Observable<Region> { // Change student to region
    return this.http.put<Region>(`${this.regionsUrl}/${id}`, region); // Changed to put for update
  }

  create(region: Region): Observable<Region> { // Change student to region
    return this.http.post<Region>(this.regionsUrl, region);
  }

  delete(region: Region): Observable<void> { // Change student to region
    return this.http.delete<void>(`${this.regionsUrl}/${region.id}`);
  }

  addTeamToRegion(region: Region, team: Team): Region { // New method to add team
    if (!region.teams) {
      region.teams = [team];
    } else {
      region.teams.push(team);
    }
    return region;
  }

  removeTeamFromRegion(region: Region, team: Team): Region { // New method to remove team
    const index = region.teams?.indexOf(team);
    if (index > -1) {
      region.teams?.splice(index, 1);
    }
    return region;
  }
}
