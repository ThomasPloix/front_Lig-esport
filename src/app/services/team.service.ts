import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team} from "../models/team.model";
import {Competition} from "../models/competition.model";
import { environment } from "../../environments/environment"

@Injectable({
    providedIn: "root",
})
export class TeamService {
  private apiUrl = environment.apiUrl;
  private teamsUrl = `${this.apiUrl}/team`; // Note the "api/" prefix here
    constructor(private http: HttpClient) {}

    findAll(): Observable<Team[]> {
        return this.http.get<Team[]>(this.teamsUrl);
    }
    findById(id: number): Observable<Team> { // Change id to bigint
        return this.http.get<Team>(`${this.teamsUrl}/${id}`);
    }
    createTeam(team: Team): Observable<Team> {
        return this.http.post<Team>(`${this.teamsUrl}`, team);
    }
    // Method to delete team by ID
    deleteTeamById(id: number): Observable<void> {
        return this.http.delete<void>(`${this.teamsUrl}/${id}`);
    }

    // Method to delete team by Name
    deleteTeamByName(name: string): Observable<void> {
        return this.http.delete<void>(`${this.teamsUrl}/name/${name}`);
    }
    /*
    findByRegion(): Observable<Team[]> {
        return this.http.get<Team[]>(this.teamsUrl/${reg});
    }


     */
}
