import {Player} from "./player.model";

export interface Team {
    id?: number;
    name:string;
    description: string;
    logo: string;
    place: string;
    partners: string;
    creation_date: string;
    players: Player[];
    lieu: string;
}