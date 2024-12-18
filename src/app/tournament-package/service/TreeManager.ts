import { NodeModel } from "../model/nodeModel"
import { TeamModel } from "../model/TeamModel"
import { TeamHolderService } from "./TeamHolderService"
import { TournamentService } from "./TournamentService"
import {CompetitionService} from "../../services/competition.service";



export class TreeManager{

  private static _nodes: NodeModel[] = [];
  private static _tree: NodeModel;

  static get tree():NodeModel{
    // if(!this.hasTree()){
    //   console.log("Building tree");
    //   this.buildTree();
    // }
    this.buildTree();
    return this._tree;
  }
  constructor() {
  }
  static hasTree(): boolean {
    return (this._tree instanceof NodeModel);
  }
  static clear(): void {
    this._nodes.length = 0;
    this._tree = new NodeModel();
  }


  private static buildTree(): void {

    let teams: TeamModel[] = TeamHolderService.teams;

    let countOf = {
      teams: teams.length,
      nodes: (teams.length * 2) - 1,
    };

    let nodes: NodeModel[] = [];

    for (let i:number = 0; i < countOf.nodes; i++) {
      let node = new NodeModel();
      nodes.push(node);

      if (nodes.length > 1) {
        let positionOfParent: number = Math.floor(nodes.length/2) - 1;
        let parent: NodeModel = nodes[positionOfParent];
        parent.addChild(node);
      }

      if (countOf.nodes - i <= countOf.teams) {
        node.setTeam(teams[i+1 - countOf.teams]);
      }
    }

    nodes[0].last = true;

    this._nodes = this._nodes.concat(nodes);
    this._tree = nodes[0];
  }

  static findParentOf(nodeToFind: NodeModel): NodeModel|boolean {

    // For each node
    for (let i:number = 0; i < this._nodes.length; i++) {
      let node = this._nodes[i];

      // For each children of the node
      for (let j = 0; j < node.children.length; j++) {
        let child:NodeModel = node.children[j];

        // If the child match, return the parent
        if (child.id === nodeToFind.id) {
          return node;
        }
      }
    }
    return false;
  }
  static forEachNodee(callback: Function, data : any): void {
    for (let i:number = 0; i < this._nodes.length; i++) {
      let node: NodeModel = TreeManager._nodes[i];
      callback(node, data);
    }
  }
  static forEachNode(callback: Function): void {
    for (let i:number = 0; i < this._nodes.length; i++) {
      let node: NodeModel = TreeManager._nodes[i];
      callback(node);
    }
  }


}
