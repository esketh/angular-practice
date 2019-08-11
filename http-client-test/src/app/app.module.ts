import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './page/index/index.component';
import { UsersComponent } from './page/users/users.component';
import { UsersEditComponent } from './page/users-edit/users-edit.component';
import { UsersNewComponent } from './page/users-new/users-new.component';
import { AboutComponent } from './page/about/about.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';

const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "users-edit/:id",
    component: UsersEditComponent
  },
  {
    path: "users-new",
    component: UsersNewComponent
  },
  {
    path: "about",
    component: UsersEditComponent
  },
  {
    path: "**",
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    UsersComponent,
    UsersEditComponent,
    UsersNewComponent,
    AboutComponent,
    FilterPipe,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
