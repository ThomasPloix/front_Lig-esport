import {Team} from "./team.model";
import {Champion} from "./champion.model";

export interface Match{
    id?: number;
    date: string;
    order_match: number;
    team1: Team;
    team2: Team;
    result: boolean;
    score: number;
    champions_picked: Champion[];
}
