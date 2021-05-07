import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './components/articles/add-article/add-article.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ShowArticleComponent } from './components/articles/show-article/show-article.component';
import { ShowProjectComponent } from './components/projects/show-project/show-project.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { ShowCategoryComponent } from './components/categories/show-category/show-category.component';

const routes: Routes = [
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'home', component: HomeComponent },
  /* Projects */
  { path: 'projects', component: ProjectsComponent },
  { path: 'add_project', component: AddProjectComponent },
  { path: 'show_project/:id', component: ShowProjectComponent },
  /* Articles */
  { path: 'show_article', component: ShowArticleComponent },
  { path: 'add_article', component: AddArticleComponent },
  /* Categories */
  { path: 'add_category', component: AddCategoryComponent },
  { path: 'show_category/:id', component: ShowCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
