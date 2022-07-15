import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { HomeListComponent } from './components/home-list-carrosel/home-list-carrosel.component';



@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeComponent,
    HomeListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
