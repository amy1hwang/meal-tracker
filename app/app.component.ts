import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>My Daily Meal Tracker</h1>
    <h3>{{month}}/{{day}}/{{year}}</h3>
    <meal-list [childMealList]="masterMealList"></meal-list>
     <div *ngIf="selectedMeal">
       <h3>Edit Meal Information</h3>
       <input [(ngModel)]="selectedMeal.name">
       <input [(ngModel)]="selectedMeal.details">
       <input [(ngModel)]="selectedMeal.calories">
       <button (click)="finishedEditing()">Submit</button>
     </div>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  //meal-list section
  masterMealList: Meal[] = [
    new Meal("Pizza", "3 slices of hawaiian pizza with diet coke", 520),
    new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
    new Meal("Sushi", "6 pieces of salmon sushi", 254),
    new Meal("Cheeseburger", "ate 2 burgers", 1054)
  ];
  //edit section
  selectedMeal = null;
  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}
