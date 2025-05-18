import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RecipeFilterPipe } from '../../pipes/recipe-filter.pipe';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import { RouterModule } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RecipeFilterPipe,
    HighlightPipe,
    RouterModule
  ],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Input() recipes: Recipe[] = [];
  @Input() filter: any = {};
  @Input() title: string = 'Receptek';
  @Input() highlightCategory: string = '';

  @Output() recipeSelected = new EventEmitter<Recipe>();
  @Output() deleteRequested = new EventEmitter<number>();

  favorites: number[] = [];

  constructor(private recipeService: RecipeService) {}

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  editRecipe(recipe: Recipe): void {
    if (recipe.name.includes('(szerkesztett)')) {
      return;
    }

    const updated: Recipe = {
      ...recipe,
      name: recipe.name + ' (szerkesztett)'
    };

    this.recipeService.updateRecipe(updated).subscribe(newList => {
      this.recipes = newList;
    });
  }

  toggleFavorite(recipe: Recipe): void {
    const index = this.favorites.indexOf(recipe.id);
    if (index === -1) {
      this.favorites.push(recipe.id);
    } else {
      this.favorites.splice(index, 1);
    }
  }

  isFavorite(recipe: Recipe): boolean {
    return this.favorites.includes(recipe.id);
  }
}
