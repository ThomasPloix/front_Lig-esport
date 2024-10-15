import {Champion} from "./champion.model";

export interface Player {
    id?: number;
    firstName:string;
    lastName: string;
    pseudo: string;
    role: string;
    champion_prefs: Champion[];
}
