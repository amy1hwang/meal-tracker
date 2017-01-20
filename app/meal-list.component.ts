import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allMeals" selected="selected">All Meals</option>
    <option value="highCalorieFood">All High-Calorie Food</option>
    <option value="lowCalorieFood">All Low-Calorie Food</option>
  </select>
  <ul  *ngFor="let currentMeal of childMealList | filtering:filterByCalories">
     <li><strong>Meal:</strong> {{currentMeal.name}}</li>
     <li><strong>Details:</strong> {{currentMeal.details}}</li>
     <li><strong>Calories:</strong> {{currentMeal.calories}}</li>
     <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
   </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  // totalCalories() {
  //   var input: Meal[];
  //   var total: number = 0;
  //   for (var i = 0; i < input.length; i++) {
  //     total += input[i].calories;
  //     console.log(input[0].calories);
  //   };
  //   console.log(total);
  //   return total;
  // }

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  filterByCalories: string = "allMeals";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
}
