import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CommonModule } from '@angular/common';

const heroRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { animation: 'heroes' },
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent,
    data: { animation: 'hero' },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(heroRoutes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
