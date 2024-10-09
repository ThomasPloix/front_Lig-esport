import { Player } from "./player.model"

export interface Team {
  id?: number;
  logo: string;
  name: string;
  description: string;
  players: Player[];
  creation_date : string;
  parternship: string;

}
