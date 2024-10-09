// src/app/services/in-memory-data.service.ts
// import { Injectable } from '@angular/core';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Region } from 'models/region.model';
//
//
// @Injectable({
//     providedIn: 'root',
// })
// export class InMemoryDataService implements InMemoryDbService {
//     createDb() {
//         const regions: Region[] = [
//             { id: 1, name: 'LEC', logourl: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/30/LEC_2023.png', teams: ["FNC","G2","MAD","KC","BDS","ROG","EXL","HRT","SK","GTX"],competitions: ["Regular Season", "Playoffs"] },
//             { id: 2, name: 'LCS', logourl: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/24/LCS_2024.png', teams: ["TL","FLY","100T"],competitions: ["Regular Season", "Playoffs"] },
//             { id: 3, name: 'LCK', logourl: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/ff/LCK_2018_logo.png', teams: ["T1","HLE","DK","GENG"],competitions: ["Regular Season", "Playoffs","Demacia Cup"] },
//             { id: 4, name: 'LPL', logourl: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/30/LEC_2023.png', teams: ["FNC","G2","MAD","KC"],competitions: ["Regular Season", "Playoffs"] },
//             { id: 5, name: 'CBLOL', logourl: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/30/LEC_2023.png', teams: ["FNC","G2","MAD","KC"],competitions: ["Regular Season", "Playoffs"] },
//             { id: 6, name: 'LATAM', logourl: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/30/LEC_2023.png', teams: ["FNC","G2","MAD","KC"],competitions: ["Regular Season", "Playoffs"] },
//             { id: 7, name: 'PCS', logourl: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/30/LEC_2023.png', teams: ["FNC","G2","MAD","KC"],competitions: ["Regular Season", "Playoffs"] },
//             { id: 8, name: 'VCS', logourl: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/30/LEC_2023.png', teams: ["FNC","G2","MAD","KC"],competitions: ["Regular Season", "Playoffs"] },
//
//         ];
//         return { regions };
//     }
// }
