import { TeamModel } from "./TeamModel"
import { TeamHolderService } from "../service/TeamHolderService"
import { IdService } from "../service/IdService"


export class NodeModel{

  private readonly _id: number;
  // @ts-ignore
  status: 'won' | 'lost' | null;
  public highlighted: boolean= false;
  // @ts-ignore
  public name: string;
  public children: NodeModel[] = [];
  // @ts-ignore
  public team: TeamModel;
  last: boolean = false;
  public debug: Boolean = false;


  constructor() {
    this._id = IdService.getUniqueId();
  }
  get id():number{
    return this._id;
  }

  win() {
    if (!(this.team instanceof TeamModel)) {
      return;
    }
    TeamHolderService.win(this);
  }

  allChildrenHaveTeam():boolean {
    let allChildrenHaveTeam: boolean = true;

    for (let i = 0; i < this.children.length; i++) {
      let child:NodeModel = this.children[i];

      if (!child.team) {
        allChildrenHaveTeam = false;
      }
    }

    return allChildrenHaveTeam;
  }


  setTeam(team: TeamModel): this {
    this.team = team;
    return this;
  }
  addChild(node: NodeModel): this {
    this.children.push(node);

    return this;
  }

  setWinTeam(team: TeamModel): void {
    this.team = team;

    for (let i = 0; i < this.children.length; i++) {
      let child:NodeModel = this.children[i];

      child.status = child.team.id === team.id ? 'won' : 'lost';
    }
  }

}
