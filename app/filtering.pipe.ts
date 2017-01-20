import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "filtering",
  pure: false
})


export class FilteringPipe implements PipeTransform {
  transform(input: Meal[], desiredCalories){
    var output: Meal[] = [];
    for (var i = 0; i < input.length; i++) {
      if(desiredCalories === "highCalorieFood") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalories === "lowCalorieFood") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
    return output;
  }
}
