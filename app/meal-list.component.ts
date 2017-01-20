import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul [class]="caloriesColor(currentMeal)" *ngFor="let currentMeal of meals">
     <li><strong>Meal:</strong> {{currentMeal.name}}</li>
     <li><strong>Details:</strong> {{currentMeal.details}}</li>
     <li><strong>Calories:</strong> {{currentMeal.calories}}</li>
     <button (click)="editMeal(currentMeal)">Edit</button>
   </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  caloriesColor(currentMeal){
    if (currentMeal.calories > 500){
      return "bg-danger";
    } else {
      return  "bg-warning";
    }
  }
}
