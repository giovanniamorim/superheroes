import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { PageNotFoundComponent } from './erros/page-not-found/page-not-found.component';

const appRoute: Routes = [
  { path: 'crisis-center', component: CrisisCenterComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: '**', component: NotFoundError },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute, { enableTracing: true }),
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    CrisisCenterComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
