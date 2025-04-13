import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../models/recipe';

@Pipe({
  name: 'recipeFilter',
  standalone: true
})
export class RecipeFilterPipe implements PipeTransform {
  transform(recipes: Recipe[], filter: { name?: string; category?: string; onlyEasy?: boolean }): Recipe[] {
    return recipes.filter(recipe => {
      const matchesName = filter.name ? recipe.name.toLowerCase().includes(filter.name.toLowerCase()) : true;
      const matchesCategory = filter.category ? recipe.category === filter.category : true;
      const matchesEasy = filter.onlyEasy ? recipe.instructions.length < 50 : true;
      return matchesName && matchesCategory && matchesEasy;
    });
  }
}
