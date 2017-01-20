import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <input [(ngModel)]="name" type="text" placeholder="Your Name">
    <h1>{{name}}'s Daily Meal Tracker</h1>
    <h3>for {{month}}/{{day}}/{{year}}</h3>
    <br>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
    <hr>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <hr>
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
    // new Meal("Pizza", "3 slices of hawaiian pizza with diet coke", 520),
    // new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
    // new Meal("Sushi", "6 pieces of salmon sushi", 254),
    // new Meal("Cheeseburger", "ate 2 burgers", 1054)
  ];
  //new-meal section
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
  //edit section
  selectedMeal = null;
  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}
