import { Directive, Input } from "@angular/core"
import { NodeModel } from "../model/nodeModel"
import { TeamHolderService } from "../service/TeamHolderService"


@Directive({
  selector: "[overlay]",
  standalone: true,
  host: {
    "(mouseenter)": "show()",
    "(mouseleave)": "hide()",
  },
})
export class OverlayDirective {
  // @ts-ignore
  @Input('overlay') node: NodeModel;

  show(): void {
    if (!this.node.team) {
      return;
    }

    TeamHolderService.highlight(this.node.team)
  }

  hide(): void {
    if (!this.node.team) {
      return;
    }

    TeamHolderService.unHighlight()
  }
}
