import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { Champion } from '../models/champion.model';
import { PlayerService } from '../services/player.service';
import {ChampionService} from "../services/champion.service";

@Component({
  selector: 'create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {
  player: Player = { firstName: '', lastName: '', pseudo: '', role: '', champion_prefs: [] };
  allChampions: Champion[] = [];

  constructor(private playerService: PlayerService, private championService: ChampionService) {}

  ngOnInit(): void {
    // Fetch all champions from the backend
    this.championService.findAll().subscribe((champions) => {
      this.allChampions = champions;
    });
  }

  createPlayer() {
    // Submit the player data to the backend
    this.playerService.createPlayer(this.player).subscribe(
        (response) => {
          console.log('Player created successfully', response);
        },
        (error) => {
          console.error('Error creating player', error);
        }
    );
  }
}
