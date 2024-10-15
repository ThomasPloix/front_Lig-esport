import { TreeManager } from "../service/TreeManager"
import { TeamHolderService } from "../service/TeamHolderService"
import { Router, RouterLink } from "@angular/router"
import { NodeComponent } from "../node/NodeComponent"
import { Component } from "@angular/core"
import { NodeModel } from "../model/nodeModel"

@Component({
  selector: 'tree-view',
  templateUrl: 'tree.html',
  styleUrls: ['../tournament.scss'],
})

export class TreeView{
    tree: NodeModel | undefined;
    debug: Boolean | undefined;
     log: {}[] | undefined;

    constructor(
        private _router: Router

    ) {}

    ngOnInit() {
        if (!TeamHolderService.isFilled()) {
            //FlashService.push('Vous devez avoir 2, 4, 8, 16 ou 32 équipes');
            this._router.navigate(['/teamstournament']);

            return;
        }

        this.tree = TreeManager.tree;
        console.log(this.tree);
        this.log = TeamHolderService.log;
    }
    //
    // public toggleDebug() {
    //     this.debug = TreeManager.toggleDebug();
    // }
}
