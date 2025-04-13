import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Recipe } from './models/recipe';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'fakanal-receptkezelo';
  menuOpen = false;

  selectedRecipe: Recipe | null = null;

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
      instructions: 'Főzd meg a hozzávalókat kb. 40 percig.'
    },
    {
      id: 3,
      name: 'Csirkepaprikás',
      category: 'Főétel',
      ingredients: ['csirke', 'hagyma', 'paprika', 'tejföl'],
      instructions: 'Pirítsd meg a hagymát, add hozzá a paprikát, majd a csirkét. Főzd puhára, végül tejföllel sűrítsd.'
    },
    {
      id: 4,
      name: 'Túrógombóc',
      category: 'Desszert',
      ingredients: ['túró', 'búzadara', 'tojás', 'zsemlemorzsa'],
      instructions: 'Keverd össze a hozzávalókat, formázz gombócokat, majd főzd ki és forgasd pirított morzsába.'
    },
    {
      id: 5,
      name: 'Gulyásleves',
      category: 'Leves',
      ingredients: ['marhahús', 'burgonya', 'sárgarépa', 'zeller'],
      instructions: 'Egy nagy lábasban pirítsd meg a hagymát, add hozzá a marhahúst, majd a fűszereket és a zöldségeket. Lassú tűzön főzd puhára.'
    },
    {
      id: 6,
      name: 'Rakott krumpli',
      category: 'Főétel',
      ingredients: ['burgonya', 'tojás', 'kolbász', 'tejföl'],
      instructions: 'Főzd meg a burgonyát és a tojást, szeleteld fel. Rétegezd egy tepsibe kolbásszal és tejföllel, majd süsd készre.'
    }
  ];
  

  filterData = {};

  onRecipeAdded(newRecipe: Recipe) {
    this.recipes.unshift(newRecipe);
  }

  onFilterChanged(filter: any) {
    this.filterData = filter;
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }  
}
