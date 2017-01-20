import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h3>Edit Meal Information</h3>
      <input [(ngModel)]="childSelectedMeal.name">
      <input [(ngModel)]="childSelectedMeal.details">
      <input [(ngModel)]="childSelectedMeal.calories">
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
