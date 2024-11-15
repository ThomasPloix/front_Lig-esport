import { Component } from '@angular/core';
import { CreateTeamComponent } from '../create-team/create-team.component'; // Import CreateTeamComponent


@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'

})

export class AdminComponent {
  // States to control the visibility of the sections
  isCreateTeamOpen = false;
  isDeleteTeamOpen = false;
  isCreatePlayerOpen = false;

  // Toggle the visibility of the Create Team section
  toggleCreateTeam() {
    // Toggle "Create Team" and ensure "Delete Team" is closed
    this.isCreateTeamOpen = !this.isCreateTeamOpen;
    if (this.isCreateTeamOpen) {
      this.isDeleteTeamOpen = false; // Close Delete Team when Create Team is opened
      this.isCreatePlayerOpen = false;
    }
  }

  // Method to toggle "Delete Team" section
  toggleDeleteTeam() {
    // Toggle "Delete Team" and ensure "Create Team" is closed
    this.isDeleteTeamOpen = !this.isDeleteTeamOpen;
    if (this.isDeleteTeamOpen) {
      this.isCreateTeamOpen = false; // Close Create Team when Delete Team is opened
      this.isCreatePlayerOpen = false;
    }
  }

  toggleCreatePlayer() {
    // Toggle "Create Team" and ensure "Delete Team" is closed
    this.isCreatePlayerOpen = !this.isCreatePlayerOpen;
    if (this.isCreatePlayerOpen) {
      this.isDeleteTeamOpen = false; // Close Delete Team when Create Team is opened
      this.isCreateTeamOpen = false
    }
  }


}
