import { Component } from '@angular/core';
import { Meal } from './meal.model';

// <input [(ngModel)]="name" type="text" placeholder="Your Name">
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div id="header">
      <div id="header-text">
        <h1>My Daily Meal Tracker</h1>
        <h3>for {{month}}/{{day}}/{{year}}</h3>
      </div>
      <div id="header-img">
      </div>
    </div>
    <br>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
    <br>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <br>
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
