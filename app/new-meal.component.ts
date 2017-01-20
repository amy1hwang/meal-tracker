import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div id="add">
      <h3>Add New Meal</h3>
      <div class="input">
        <input #newName placeholder="Meal">
        <input #newDetails placeholder="Meal Details">
        <input #newCalories placeholder="Calories">
      </div>
      <div id="button">
        <button (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">SUBMIT</button>
      </div>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
