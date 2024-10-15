import { Component, Input } from "@angular/core"
import { NodeModel } from "../model/nodeModel"
import { OverlayDirective } from "../directive/OverlayDirective"

@Component({
  selector: 'node',
  templateUrl: './node.html',
  styleUrls: ["../tournament.scss"],
})
export class NodeComponent {

  // @ts-ignore
  @Input() node: NodeModel;
}
