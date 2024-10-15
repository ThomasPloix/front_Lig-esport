import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Competition} from "../models/competition.model";
import {Region} from "../models/region.model";

@Injectable({
    providedIn: "root",
})
export class CompetitionService {
    private regionsUrl = "http://localhost:8080/compete"; // Note the "api/" prefix here


    constructor(private http: HttpClient) {}

    findAll(): Observable<Competition[]> {
        return this.http.get<Competition[]>(this.regionsUrl);
    }

    findById(id: number): Observable<Region> { // Change id to bigint
        return this.http.get<Region>(`${this.regionsUrl}/${id}`);
    }

    createTournament(tournament: Competition): Observable<Competition> {
        return this.http.post<Competition>(`${this.regionsUrl}`, tournament);
    }


}
