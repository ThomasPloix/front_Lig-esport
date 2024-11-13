import { Component } from '@angular/core';
import { CreateTeamComponent } from '../create-team/create-team.component'; // Import CreateTeamComponent


@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'

})

export class AdminComponent {
  // To control the visibility of the Create Team form
  isCreateTeamOpen: boolean = false;

  // Toggle the visibility of the Create Team section
  toggleCreateTeam() {
    this.isCreateTeamOpen = !this.isCreateTeamOpen;
  }
}
