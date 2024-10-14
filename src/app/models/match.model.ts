import {Team} from "./team.model";
import {Champion} from "./champion.model";

export interface Match{
    id?: number;
    date: string;
    team1: Team;
    team2: Team;
    result: boolean;
    score: number;
    champions_picked: Champion[];
}