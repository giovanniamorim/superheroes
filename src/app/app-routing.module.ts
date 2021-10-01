import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './erros/page-not-found/page-not-found.component';

const appRoute: Routes = [
  { path: 'crisis-center', component: CrisisCenterComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
