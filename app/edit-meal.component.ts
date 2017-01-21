import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div id="edit" *ngIf="childSelectedMeal">
      <h3>Edit Meal Information</h3>
      <div class="input">
        <input [(ngModel)]="childSelectedMeal.name">
        <input [(ngModel)]="childSelectedMeal.details">
        <input [(ngModel)]="childSelectedMeal.calories">
      </div>
      <button (click)="doneButtonClicked()">Submit</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
