import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Champion } from '../models/champion.model';

@Injectable({
    providedIn: 'root',
})
export class ChampionService {
    private apiUrl = 'http://your-api-url/champions'; // Replace with your API endpoint

    constructor(private http: HttpClient) {}

    findAll(): Observable<Champion[]> {
        return this.http.get<Champion[]>(this.apiUrl);
    }

    findByName(name: string): Observable<Champion> {
        return this.http.get<Champion>(`${this.apiUrl}/name/${name}`);
    }
}