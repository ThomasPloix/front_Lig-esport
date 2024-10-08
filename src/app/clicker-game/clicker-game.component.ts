import { Component } from '@angular/core';

@Component({
  selector: 'app-clicker-game',
  templateUrl: './clicker-game.component.html',
  styleUrls: ['./clicker-game.component.scss']
})
export class ClickerGameComponent {
  clickCount: number = 0;
  isExploded: boolean = false;
  totalClicks: number = 10; // You can change this to any number of clicks
  clickSound = new Audio('assets/Meow.mp3');  // Load the sound file

  // Function to handle image click
  onImageClick() {
    if (!this.isExploded) {
      this.clickCount++;
      this.playClickSound();  // Play sound on click
      if (this.clickCount >= this.totalClicks) {
        this.isExploded = true;
      }
    }
  }
  // Function to play the click sound
  playClickSound() {
    this.clickSound.currentTime = 0;  // Rewind sound to the beginning
    this.clickSound.play();           // Play the sound
  }

  // Function to reset the game
  resetGame() {
    this.clickCount = 0;
    this.isExploded = false;
  }
}
