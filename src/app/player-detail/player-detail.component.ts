import {Component, Input} from '@angular/core';
import {Player} from "../models/player.model";

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.scss'
})
export class PlayerDetailsComponent {
  @Input() player!: Player; // Accept the player object as an input
}
