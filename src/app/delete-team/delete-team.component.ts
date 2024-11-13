// delete-team.component.ts
import { Component } from '@angular/core';
import { TeamService } from '../services/team.service'; // Import TeamService
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-team',
  templateUrl: './delete-team.component.html',
  styleUrls: ['./delete-team.component.scss']
})
export class DeleteTeamComponent {
  teamId: number | null = null;
  teamName: string = '';
  deleteMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private teamService: TeamService, private router: Router) {}

  deleteTeam(): void {
    if (this.teamId) {
      // Delete by ID
      this.teamService.deleteTeamById(this.teamId).subscribe({
        next: () => {
          this.deleteMessage = `Team with ID ${this.teamId} has been successfully deleted.`;
          this.router.navigate(['/']);  // Redirect after successful delete
        },
        error: (err) => {
          this.errorMessage = `Error deleting team with ID ${this.teamId}: ${err.message}`;
        }
      });
    } else if (this.teamName) {
      // Delete by Name
      this.teamService.deleteTeamByName(this.teamName).subscribe({
        next: () => {
          this.deleteMessage = `Team with name "${this.teamName}" has been successfully deleted.`;
          this.router.navigate(['/']);  // Redirect after successful delete
        },
        error: (err) => {
          this.errorMessage = `Error deleting team with name "${this.teamName}": ${err.message}`;
        }
      });
    } else {
      this.errorMessage = 'Please provide either a team ID or name to delete.';
    }
  }
}
