import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Competition} from "../models/competition.model";
import {Region} from "../models/region.model";
import * as process from "node:process";

@Injectable({
    providedIn: "root",
})
export class CompetitionService {
    private regionsUrl = `http://${process.env["API_URL"]}/compete`; // Note the "api/" prefix here


    constructor(private http: HttpClient) {}

    findAll(): Observable<Competition[]> {
        return this.http.get<Competition[]>(this.regionsUrl);
    }

    findById(id: number): Observable<Competition> { // Change id to bigint
        return this.http.get<Competition>(`${this.regionsUrl}/${id}`);
    }

    createTournament(tournament: Competition): Observable<Competition> {
        return this.http.post<Competition>(`${this.regionsUrl}`, tournament);
    }


}
