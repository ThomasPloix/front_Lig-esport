import { TreeManager } from "../service/TreeManager"
import { TeamHolderService } from "../service/TeamHolderService"
import { Router } from "@angular/router"

import { Component } from "@angular/core"
import { NodeModel } from "../model/nodeModel"
import { TournamentService } from "../service/TournamentService"
import { Competition } from "../../models/competition.model"
import { Team } from "../../models/team.model"
import { Match } from "../../models/match.model"
import { CompetitionService } from "../../services/competition.service"

@Component({
  selector: "tree-view",
  templateUrl: "tree.html",
  styleUrls: ["../tournament.scss"],
})

export class TreeView {
  competition: Competition | undefined

  tree: NodeModel | undefined
  debug: Boolean | undefined
  log: {}[] | undefined
  private teams: Team[] | undefined
  private matches: Match[] | undefined


  constructor(
    private _router: Router,
    private TournamentService: TournamentService,
    private CompetitionService: CompetitionService,
  ) {
  }

  ngOnInit() {
    // if (!TeamHolderService.isFilled()) {
    //     //FlashService.push('Vous devez avoir 2, 4, 8, 16 ou 32 équipes');
    //     this._router.navigate(['/teamstournament']);
    //     return;
    //
    this.TournamentService.selectedTournoi$.subscribe(tournoi => {
      this.competition= tournoi
      this.teams = this.competition?.teams_compete
      if (this.teams != undefined) {
        TeamHolderService.clearTeam()
        for (let team of this.teams) {
          TeamHolderService.addTeam(team.name)
        }
      }

      console.log(TeamHolderService.teams)
      this.tree = TreeManager.tree
      this.TournamentService.selectedTournoi$.subscribe((data) => {

        TreeManager.forEachNodee(Load, data);

      function Load(node: NodeModel, data: Competition) {
        let teams = data.teams_compete
        console.log(teams, "eeeee")
        console.log(node, "node")
        if (node.team != undefined) {
          for (let match of data?.matches) {
            if (node.team.name == match.team1.name && !match.result) {
              node.win()
            }
            if (node.team.name == match.team2.name && match.result) {
              node.win()
          }
        }
      }
      }
    })

      console.log(this.tree)
      this.log = TeamHolderService.log
    })

  }


  //
  // public toggleDebug() {
  //     this.debug = TreeManager.toggleDebug();
  // }
}
