import {Player} from "./player.model";

export interface Team {
    id?: number;
    name:string;
    description: string;
    logo: string;
    place: string;
    partners: string;
    creation_date: string;
    lieu: string;
    players: Player[];
}
