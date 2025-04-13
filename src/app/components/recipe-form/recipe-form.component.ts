import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

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
  styleUrl: './recipe-form.component.scss'
})
export class RecipeFormComponent {
  @Output() recipeAdded = new EventEmitter<any>();

  name = '';
  category = '';
  ingredients = '';
  instructions = '';

  addedRecipes: any[] = [];

  onSubmit() {
    if (!this.name.trim() || !this.category.trim() || !this.ingredients.trim() || !this.instructions.trim()) {
      alert('Kérlek, tölts ki minden mezőt!');
      return;
    }
  
    const newRecipe = {
      name: this.name,
      category: this.category,
      ingredients: this.ingredients.split(',').map(ing => ing.trim()),
      instructions: this.instructions
    };
  
    this.addedRecipes.push(newRecipe);
    console.log('Új recept:', newRecipe);
    alert('Recept hozzáadva!');
  
    this.name = '';
    this.category = '';
    this.ingredients = '';
    this.instructions = '';
  }
}
