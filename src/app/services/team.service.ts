import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team} from "../models/team.model";

@Injectable({
    providedIn: "root",
})
export class TeamService {
    private teamsUrl = "http://localhost:8080/teams"; // Note the "api/" prefix here
    constructor(private http: HttpClient) {}

    findAll(): Observable<Team[]> {
        return this.http.get<Team[]>(this.teamsUrl);
    }
    findById(id: number): Observable<Team> { // Change id to bigint
        return this.http.get<Team>(`${this.teamsUrl}/${id}`);
    }
}