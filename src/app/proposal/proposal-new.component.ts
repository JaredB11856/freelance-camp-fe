import { Component } from '@angular/core';
import { Propsal } from '/proposal';

@Component ({
  moduleId: module.id,
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html'
})
export class ProposalNewComponent {
  proposal = new Proposal;
}