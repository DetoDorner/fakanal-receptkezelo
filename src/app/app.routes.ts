import { Routes } from '@angular/router';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeFilterComponent } from './components/recipe-filter/recipe-filter.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: RecipeFormComponent },
  { path: 'detail/:id', component: RecipeDetailComponent },
  { path: 'filter', component: RecipeFilterComponent }
];

