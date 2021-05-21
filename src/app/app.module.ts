import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';

/* Zorro modules */
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';



import { NgxPaginationModule } from 'ngx-pagination';
/* Components */
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ShowProjectComponent } from './components/projects/show-project/show-project.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { PreviewComponent } from './components/projects/show-project/preview/preview.component';
import { WikiComponent } from './components/projects/show-project/wiki/wiki.component';
import { ShowArticleComponent } from './components/articles/show-article/show-article.component';
import { AddArticleComponent } from './components/articles/add-article/add-article.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { InformationsComponent } from './components/configuration/informations/informations.component';
import { MembersComponent } from './components/configuration/members/members.component';
import { WikiConfigComponent } from './components/configuration/wiki-config/wiki-config.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { ShowCategoryComponent } from './components/categories/show-category/show-category.component';
import { ContentComponent } from './components/articles/show-article/content/content.component';
import { FilesComponent } from './components/articles/show-article/files/files.component';
import { HistoryComponent } from './components/articles/show-article/history/history.component';
import { AddWikiComponent } from './components/projects/show-project/wiki/add-wiki/add-wiki.component';


import { CKEditorModule } from 'ckeditor4-angular';
import { AuthComponent } from './components/auth/auth.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AdminProjectsComponent } from './components/administration/admin-projects/admin-projects.component';
import { AdminUsersComponent } from './components/administration/admin-users/admin-users.component';
import { AdminRolesComponent } from './components/administration/admin-roles/admin-roles.component';
import { AddRoleComponent } from './components/administration/admin-roles/add-role/add-role.component';
import { EditArticleComponent } from './components/articles/edit-article/edit-article.component';
import { AddUserComponent } from './components/administration/admin-users/add-user/add-user.component';
import { EditUserComponent } from './components/administration/admin-users/edit-user/edit-user.component';
import { EditWikiComponent } from './components/configuration/wiki-config/edit-wiki/edit-wiki.component';


registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    AddProjectComponent,
    ShowProjectComponent,
    ArticlesComponent,
    PreviewComponent,
    WikiComponent,
    ShowArticleComponent,
    AddArticleComponent,
    ConfigurationComponent,
    InformationsComponent,
    MembersComponent,
    WikiConfigComponent,
    CategoriesComponent,
    AddCategoryComponent,
    ShowCategoryComponent,
    ContentComponent,
    FilesComponent,
    HistoryComponent,
    AddWikiComponent,
    AuthComponent,
    AdministrationComponent,
    AdminProjectsComponent,
    AdminUsersComponent,
    AdminRolesComponent,
    AddRoleComponent,
    EditArticleComponent,
    AddUserComponent,
    EditUserComponent,
    EditWikiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzTabsModule,
    NzMenuModule,
    ReactiveFormsModule,
    MatInputModule,
    NzListModule,
    NzAvatarModule,
    NzTableModule,
    NzModalModule,
    CKEditorModule,
    NzMessageModule,
    NzFormModule,
    NzInputModule,
    NzSkeletonModule,
    NgxPaginationModule,
    NzSelectModule,
    NzCheckboxModule,
    NzButtonModule,
    NzDropDownModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
