import {Team} from "./team.model";
import {Match} from "./match.model";

export interface Competition {
    id?: number;
    name: string;
    region: number;
    teams_compete: Team[];
    matches: Match[];
}