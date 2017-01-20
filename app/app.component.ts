import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>My Daily Meal Tracker</h1>
    <h3>{{month}}/{{day}}/{{year}}</h3>
    <ul [class]="caloriesColor(currentMeal)" *ngFor="let currentMeal of meals">
       <li>{{currentMeal.name}}</li>
       <li>{{currentMeal.details}}</li>
       <li>{{currentMeal.calories}}</li>
       <button (click)="editTask()">Edit!</button>
     </ul>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  meals: Meal[] = [
    new Meal("Pizza", "3 slices of hawaiian pizza with diet coke", 520),
    new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
    new Meal("Sushi", "6 pieces of salmon sushi", 254),
    new Meal("Cheeseburger", "ate 2 burgers", 1054)
  ];
  caloriesColor(currentMeal){
    if (currentMeal.calories > 500){
      return "bg-danger";
    } else {
      return  "bg-warning";
    }
  }
}


export class Meal {
  constructor(public name: string, public details: string, public calories: number  ) { }
}
