import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>My Daily Meal Tracker</h1>
    <h3>{{month}}/{{day}}/{{year}}</h3>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
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
  //new-meal section
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
