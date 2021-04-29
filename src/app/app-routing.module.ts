import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ShowArticleComponent } from './components/show-article/show-article.component';
import { ShowProjectComponent } from './components/show-project/show-project.component';

const routes: Routes = [
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'add_project', component: AddProjectComponent },
  { path: 'show_project', component: ShowProjectComponent },
  { path: 'show_article', component: ShowArticleComponent },
  { path: 'add_article', component: AddArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
