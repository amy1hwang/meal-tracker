import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div id="list">
    <h3>Meal Log</h3>
    Fliter by calories:
    <select (change)="onChange($event.target.value)">
      <option value="allMeals" selected="selected">All Meals</option>
      <option value="highCalorieFood">All High-Calorie Meals ( > 500)</option>
      <option value="lowCalorieFood">All Low-Calorie Meals ( < 500)</option>
    </select>
    <div id="list-flex">
      <ul  *ngFor="let currentMeal of childMealList | filtering:filterByCalories">
         <li><strong>Meal:</strong> {{currentMeal.name}}</li>
         <li><strong>Details:</strong> {{currentMeal.details}}</li>
         <li><strong>Calories:</strong> {{currentMeal.calories}}</li>
         <button id="edit-button" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
       </ul>
     </div>
   </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  filterByCalories: string = "allMeals";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
}
