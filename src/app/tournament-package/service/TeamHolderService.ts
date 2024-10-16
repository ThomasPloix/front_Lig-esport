import { TeamModel } from "../model/TeamModel"
import { NodeModel } from "../model/nodeModel"
import { TreeManager } from "./TreeManager"

export class TeamHolderService{

  private static _teamsList: TeamModel[] = [
    new TeamModel("Team 1"),
    new TeamModel("Team 2"),
    new TeamModel("Team 3"),
    new TeamModel("Team 4"),
    new TeamModel("Team 5"),
    new TeamModel("Team 6"),
    new TeamModel("Team 7"),
    new TeamModel("Team 8"),
  ];

  private static _log: {}[] = [];

  static get teams(): TeamModel[]{
    return this._teamsList;
  }
  static get log():{}[] {
    return this._log;
  }

  static addTeam(name: string): TeamHolderService{
    this._teamsList.push(new TeamModel(name));
    return TeamHolderService;
  }

  static removeTeam(team: TeamModel): TeamHolderService{
    for(let i:number = 0; i < this._teamsList.length; i++){
      if(this._teamsList[i].id == team.id){
        this._teamsList.splice(i, 1);
        break;
      }
    }
    return TeamHolderService;
  }
  static clearTeam(): TeamHolderService{
    this._teamsList.length = 0;
    return TeamHolderService;
  }

  static clear():void {
    TreeManager.clear();
    this._teamsList.length = 0;
  }

  static win(node: NodeModel): Boolean{
    let wonPlace: NodeModel|Boolean = TreeManager.findParentOf(node);

    if (wonPlace instanceof NodeModel && !wonPlace.team && wonPlace.allChildrenHaveTeam()) {
      wonPlace.setWinTeam(node.team);

      this.logWin(wonPlace);

      return true;
    }
    return false;
  }

  private static logWin(wonNode: NodeModel):void {

    let looser: TeamModel, winner: TeamModel = wonNode.team;

    for (let i = 0; i < wonNode.children.length; i++) {
      if (wonNode.children[i].team.id !== winner.id) {
        looser = wonNode.children[i].team;
        break;
      }
    }

    // @ts-ignore
    this._log.push({winner: winner, looser: looser, date: new Date()});
  }

  static highlight(team: TeamModel):void {
    TreeManager.forEachNode(function(node: NodeModel) {
      if (node.team && node.team.id === team.id) {
        node.highlighted = true;
      }
    })
  }

  static unHighlight():void {
    TreeManager.forEachNode(function(node: NodeModel) {
      node.highlighted = false;
    })
  }

  static isFilled(): boolean {
    let l = this._teamsList.length;
    // Is power of 2
    return Boolean(l) && (l & (l - 1)) === 0;
  }




}
