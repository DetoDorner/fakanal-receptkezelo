import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule
  ],
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'] 
})
export class RecipeFormComponent {
  name = '';
  category = '';
  ingredients = '';
  instructions = '';

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.name.trim() || !this.category.trim() || !this.ingredients.trim() || !this.instructions.trim()) {
      alert('Kérlek, tölts ki minden mezőt!');
      return;
    }

    const newRecipe: Recipe = {
      id: 0, // ideiglenes, a service ad neki valódit
      name: this.name,
      category: this.category,
      ingredients: this.ingredients.split(',').map(ing => ing.trim()),
      instructions: this.instructions
    };

    this.recipeService.addRecipe(newRecipe).subscribe(() => {
      alert('Recept sikeresen hozzáadva!');
      this.router.navigate(['/filter']);
    });

    this.name = '';
    this.category = '';
    this.ingredients = '';
    this.instructions = '';
  }
}
