import { Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeFilterComponent } from './components/recipe-filter/recipe-filter.component';

export const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'add', component: RecipeFormComponent },
  { path: 'detail/:id', component: RecipeDetailComponent },
  { path: 'filter', component: RecipeFilterComponent }
];
