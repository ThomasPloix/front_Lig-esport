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
  explosionSound = new Audio('assets/Explosion.mp3');

  // Function to handle image click
  onImageClick() {
    if (!this.isExploded) {

      if (this.clickCount < this.totalClicks-1  ){
        this.playClickSound();  // Play sound on click
    }
      else {
        this.playExplosionSound();
        this.isExploded = true;
      }
      this.clickCount++;
    }
  }
  // Function to play the click sound
  playClickSound() {
    this.clickSound.currentTime = 0;  // Rewind sound to the beginning
    this.clickSound.play();           // Play the sound
  }
  playExplosionSound() {
    this.explosionSound.currentTime = 0;  // Rewind sound to the beginning
    this.explosionSound.play();           // Play the sound
  }

  // Function to reset the game
  resetGame() {
    this.clickCount = 0;
    this.isExploded = false;
  }
}
