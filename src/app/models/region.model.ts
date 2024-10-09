import { Team } from "./team.model"

export interface Region {
  id: number;
  name: string;
  logo: string;
  teams: Team [];
  competitions: string [];
}
