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
import { AddWikiComponent } from './components/projects/show-project/wiki/add-wiki/add-wiki.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AuthGuard } from './services/auth.guard';
import { AppComponent } from './app.component';
import { EditArticleComponent } from './components/articles/edit-article/edit-article.component';
import { AddUserComponent } from './components/administration/admin-users/add-user/add-user.component';
import { AddRoleComponent } from './components/administration/admin-roles/add-role/add-role.component';
import { EditUserComponent } from './components/administration/admin-users/edit-user/edit-user.component';
import { EditWikiComponent } from './components/configuration/wiki-config/edit-wiki/edit-wiki.component';

const routes: Routes = [
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule), canActivate: [AuthGuard] },
  { path: 'login', component: AppComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  /* Administration */
  { path: 'administration', component: AdministrationComponent, canActivate: [AuthGuard] },
  { path: 'add_user', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: 'edit_user/:id', component: EditUserComponent, canActivate: [AuthGuard] },
  { path: 'add_role', component: AddRoleComponent, canActivate: [AuthGuard] },

  /* Projects */
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: 'add_project', component: AddProjectComponent, canActivate: [AuthGuard] },
  { path: 'show_project/:id', component: ShowProjectComponent, canActivate: [AuthGuard] },
  /* Projects : Configuration */
  { path: 'edit_wiki/:project_id/:wiki_id', component: EditWikiComponent, canActivate: [AuthGuard] },

  /* Articles */
  { path: 'show_article/:id', component: ShowArticleComponent, canActivate: [AuthGuard] },
  { path: 'add_article', component: AddArticleComponent, canActivate: [AuthGuard] },
  { path: 'edit_article/:id', component: EditArticleComponent, canActivate: [AuthGuard] },
  /* Categories */
  { path: 'add_category', component: AddCategoryComponent, canActivate: [AuthGuard] },
  { path: 'show_category/:id', component: ShowCategoryComponent, canActivate: [AuthGuard] },
  /* Wikis */
  { path: 'add_wiki/:id', component: AddWikiComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
