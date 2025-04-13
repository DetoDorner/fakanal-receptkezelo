import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RecipeFilterPipe } from '../../pipes/recipe-filter.pipe';
import { RouterModule } from '@angular/router';

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
    RouterModule
  ],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Input() recipes: Recipe[] = [];
  @Input() filter: any = {};

  @Output() recipeSelected = new EventEmitter<Recipe>();

  get displayedRecipes(): Recipe[] {
    if (this.recipes && this.recipes.length > 0) {
      return this.recipes;
    }

    return [
      {
        id: 1,
        name: 'Palacsinta',
        category: 'Desszert',
        ingredients: ['liszt', 'tojás', 'tej'],
        instructions: 'Keverd össze az alapanyagokat, majd forró serpenyőben süsd ki mindkét oldalát.'
      },
      {
        id: 2,
        name: 'Lencseleves',
        category: 'Leves',
        ingredients: ['lencse', 'répa', 'hagyma'],
        instructions: 'Áztasd be a lencsét, majd főzd meg a zöldségekkel és fűszerekkel.'
      },
      {
        id: 3,
        name: 'Csirkepaprikás',
        category: 'Főétel',
        ingredients: ['csirke', 'paprika', 'tejföl'],
        instructions: 'Pirítsd meg a csirkét, adj hozzá paprikát, főzd meg, végül keverd bele a tejfölt.'
      },
      {
        id: 4,
        name: 'Almás pite',
        category: 'Desszert',
        ingredients: ['alma', 'liszt', 'vaj', 'cukor', 'fahéj'],
        instructions: 'Keverd össze a hozzávalókat, tedd a tésztát formába, süsd aranybarnára.'
      },
      {
        id: 5,
        name: 'Zöldségleves',
        category: 'Leves',
        ingredients: ['répa', 'karalábé', 'zeller', 'zöldborsó'],
        instructions: 'Vágd fel a zöldségeket, főzd meg vízben sóval, majd tálald melegen.'
      }
    ];
  }

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
