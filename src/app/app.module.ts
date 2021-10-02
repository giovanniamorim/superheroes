import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { PageNotFoundComponent } from './erros/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesRoutingModule } from './heroes/heroes-rounting.module';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, CrisisCenterComponent, PageNotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
