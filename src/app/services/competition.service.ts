import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Competition} from "../models/competition.model";
import {Region} from "../models/region.model";
import * as process from "node:process";
import { environment } from "../../environments/environment"

@Injectable({
    providedIn: "root",
})
export class CompetitionService {
    private apiUrl = environment.apiUrl;
    private CompeteUrl = `${this.apiUrl}/compete`; // Note the "api/" prefix here


    constructor(private http: HttpClient) {}

    findAll(): Observable<Competition[]> {
        return this.http.get<Competition[]>(this.CompeteUrl);
    }

    findById(id: number): Observable<Competition> { // Change id to bigint
        return this.http.get<Competition>(`${this.CompeteUrl}/${id}`);
    }

    createTournament(tournament: Competition): Observable<Competition> {
        return this.http.post<Competition>(`${this.CompeteUrl}`, tournament);
    }


}
