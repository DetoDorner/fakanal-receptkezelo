import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Recipe } from '../../models/recipe';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-recipe-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  templateUrl: './recipe-filter.component.html',
  styleUrls: ['./recipe-filter.component.scss']
})
export class RecipeFilterComponent {
  // Szűrési mezők
  searchName: string = '';
  selectedCategory: string = '';
  onlyEasy: boolean = false;

  // Dummy adatok
  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Palacsinta',
      category: 'Desszert',
      ingredients: ['liszt', 'tojás', 'tej'],
      instructions: 'Keverd össze és süsd ki.'
    },
    {
      id: 2,
      name: 'Lencseleves',
      category: 'Leves',
      ingredients: ['lencse', 'répa', 'hagyma'],
      instructions: 'Főzd meg kb. 40 percig.'
    },
    {
      id: 3,
      name: 'Rántotta',
      category: 'Főétel',
      ingredients: ['tojás', 'vaj'],
      instructions: 'Felvered a tojást és kisütöd serpenyőben.'
    },
    {
      id: 4,
      name: 'Gyümölcssaláta',
      category: 'Desszert',
      ingredients: ['alma', 'banán', 'szőlő'],
      instructions: 'Darabold fel a gyümölcsöket és keverd össze.'
    },
    {
      id: 5,
      name: 'Mozzarellás snackgolyók',
      category: 'Snack',
      ingredients: ['mozzarella', 'panír', 'olaj'],
      instructions: 'Golyókat formázz, panírozd be és süsd aranybarnára.'
    },
    {
      id: 6,
      name: 'Palacsinta',
      category: 'Desszert',
      ingredients: ['banán', 'tojás', 'zabpehely'],
      instructions: 'Turmixold össze a hozzávalókat, majd süsd ki lassú tűzön.'
    },
  ];

  // Szűrt eredménylista
  filteredRecipes: Recipe[] = [...this.recipes];

  filter() {
    this.filteredRecipes = this.recipes.filter(recipe => {
      const nameMatch = this.searchName ? recipe.name.toLowerCase().includes(this.searchName.toLowerCase()) : true;
      const categoryMatch = this.selectedCategory ? recipe.category === this.selectedCategory : true;
      const easyMatch = this.onlyEasy ? recipe.instructions.length < 50 : true;
      return nameMatch && categoryMatch && easyMatch;
    });
  }
}
