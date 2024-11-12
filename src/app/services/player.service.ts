import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Player } from "../models/player.model";
import * as process from "node:process";

@Injectable({
    providedIn: "root",
})
export class PlayerService {
    private playersUrl = `http://localhost:8080/players`; // Your API endpoint for players

    constructor(private http: HttpClient) {}

    // Fetch all players
    findAll(): Observable<Player[]> {
        return this.http.get<Player[]>(this.playersUrl);
    }

    // Fetch a player by ID
    findById(id: number): Observable<Player> {
        return this.http.get<Player>(`${this.playersUrl}/${id}`);
    }

    /* Create a new player
    createPlayer(player: Player): Observable<Player> {
        return this.http.post<Player>(this.playersUrl, player);
    }


    // Update a player
    updatePlayer(id: number, player: Player): Observable<Player> {
        return this.http.put<Player>(`${this.playersUrl}/${id}`, player);
    }

    // Delete a player
    deletePlayer(id: number): Observable<void> {
        return this.http.delete<void>(`${this.playersUrl}/${id}`);
    }

     */
}
