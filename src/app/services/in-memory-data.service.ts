// src/app/services/in-memory-data.service.ts
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Region } from 'models/region.model';


@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const regions: Region[] = [
            { id: 1, name: 'LEC', logourl: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b4/G2_Esportslogo_profile.png', teams: ["FNC","G2","MAD","KC"],competitions: ["Regular Season", "Playoffs"] },
            { id: 2, name: 'LCS', logourl: '../../assets/Explo.png', teams: ["TL","FLY","100T"],competitions: ["Regular Season", "Playoffs"] },
            { id: 3, name: 'LCK', logourl: '../../assets/Explo.png', teams: ["T1","HLE","DK","GENG"],competitions: ["Regular Season", "Playoffs","Demacia Cup"] },
        ];



        return { regions };
    }
}
