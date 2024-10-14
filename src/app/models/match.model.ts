import {Team} from "./team.model";

export interface Match{
    id?: number;
    date: string;
    team1: Team;
    team2: Team;
    result: boolean;
    score: number;
}