import { Team } from "./team.model"
import {Competition} from "./competition.model";

export interface Region {
  id: number;
  name: string;
  logo: string;
  teams: Team [];
  competitions: Competition [];
}
