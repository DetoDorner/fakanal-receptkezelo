import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private dummyRecipes: Recipe[] = [
    {
      id: 1,
      name: 'Palacsinta',
      category: 'Desszert',
      ingredients: ['liszt', 'tojás', 'tej'],
      instructions: 'Keverd össze és süsd ki.'
    }, 
    {
      id: 2,
      name: 'Palacsinta (hosszú változat)',
      category: 'Desszert',
      ingredients: ['liszt', 'tojás', 'tej', 'cukor', 'vanília', 'vaj'],
      instructions: 'Keverd össze az összes hozzávalót egy nagy tálban. '
  + 'Hagyd állni 20 percig, majd süsd ki kis adagokban, közepes lángon. '
  + 'Figyelj arra, hogy ne égjen meg, és szépen megfordítható legyen.'
    },
    {
      id: 3,
      name: 'Lencseleves',
      category: 'Leves',
      ingredients: ['lencse', 'répa', 'hagyma'],
      instructions: 'Főzd meg kb. 40 percig.'
    },
    {
      id: 4,
      name: 'Rántotta',
      category: 'Főétel',
      ingredients: ['tojás', 'vaj'],
      instructions: 'Felvered a tojást és kisütöd serpenyőben.'
    },
    {
       id: 5,
       name: 'Sajtos rudacskák (hosszú változat)',
       category: 'Snack',
       ingredients: ['liszt', 'vaj', 'sajt', 'tojás', 'só', 'sütőpor'],
       instructions: 'Keverd össze a lisztet, a sütőport, a sót és a vajat egy nagy tálban. '
         + 'Add hozzá a reszelt sajtot és a tojást, majd gyúrd össze egy közepesen lágy tésztává. '
         + 'Nyújtsd ki, vágd rudakra, és süsd 180°C-on aranybarnára körülbelül 15–20 perc alatt.'
    },
    {
      id: 6,
      name: 'Extra Lasagne',
      category: 'Főétel',
      ingredients: ['tészta', 'paradicsom', 'hús', 'sajt'],
      instructions: 'Rétegezd a hozzávalókat, majd süsd 180 fokon 45 percig. Hagyd pihenni 10 percet tálalás előtt.'
    },
    {
      id: 7,
      name: 'Extra Csokis Muffin',
      category: 'Desszert',
      ingredients: ['liszt', 'tojás', 'cukor', 'kakaó', 'csokoládé'],
      instructions: 'Keverd össze a hozzávalókat, adagold formákba, majd süsd 180 fokon kb. 20 percig.'
    },
    {
      id: 8,
      name: 'Sült Krumpli Deluxe',
      category: 'Snack',
      ingredients: ['burgonya', 'só', 'olaj', 'fokhagyma', 'rozmaring'],
      instructions: 'Szeleteld fel a burgonyát, fűszerezd meg, és süsd 200 fokon ropogósra.'
    },
    {
      id: 9,
      name: 'Gyümölcsös Zabkása',
      category: 'Desszert',
      ingredients: ['zabpehely', 'tej', 'banán', 'málna', 'méz'],
      instructions: 'Főzd a zabot tejben, majd díszítsd friss gyümölcsökkel és mézzel.'
    },
    {
      id: 10,
      name: 'Tárkonyos csirkeragu',
      category: 'Leves',
      ingredients: ['csirke', 'zöldség', 'tárkony', 'tejszín'],
      instructions: 'Főzd meg a zöldségeket és a csirkét, ízesítsd tárkonnyal és sűrítsd tejszínnel.'
    },
    {
      id: 11,
      name: 'Pesto-s tészta',
      category: 'Főétel',
      ingredients: ['tészta', 'bazsalikom', 'fokhagyma', 'parmezán', 'olívaolaj'],
      instructions: 'Keverd össze a főtt tésztát házi pestóval és szórd meg parmezánnal.'
    },
    {
      id: 12,
      name: 'Sajtos tallér',
      category: 'Snack',
      ingredients: ['liszt', 'vaj', 'sajt', 'tojás'],
      instructions: 'Gyúrd össze a hozzávalókat, formázz korongokat, és süsd aranybarnára.'
    },
    {
      id: 13,
      name: 'Almás pite (hagyományos)',
      category: 'Desszert',
      ingredients: ['alma', 'fahéj', 'liszt', 'cukor', 'vaj'],
      instructions: 'Készíts tésztát, töltsd meg almás töltelékkel, majd süsd 180 fokon aranybarnára.'
    },
    {
      id: 14,
      name: 'Spenótos rakott burgonya',
      category: 'Főétel',
      ingredients: ['spenót', 'krumpli', 'sajt', 'tojás', 'tejföl'],
      instructions: 'Rétegezd a hozzávalókat egy tálba, majd süsd készre 200 fokon.'
    }
  ];

  getAllRecipes(): Observable<Recipe[]> {
    return of(this.dummyRecipes);
  }

  addRecipe(recipe: Recipe): Observable<Recipe[]> {
    recipe.id = this.dummyRecipes.length + 1;
    this.dummyRecipes.unshift(recipe);
    return of(this.dummyRecipes);
  }

  deleteRecipe(id: number): Observable<Recipe[]> {
    this.dummyRecipes = this.dummyRecipes.filter(r => r.id !== id);
    return of(this.dummyRecipes);
  }

  updateRecipe(updated: Recipe): Observable<Recipe[]> {
    this.dummyRecipes = this.dummyRecipes.map(r =>
      r.id === updated.id ? { ...updated } : r
    );
    return of(this.dummyRecipes);
  }
}
