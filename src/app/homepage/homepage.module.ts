import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {HomePageRoutingModule} from '../homepage/home-page-routing.module'
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
     HomePageRoutingModule,
     MatCardModule,
     MatButtonModule,
     MatListModule,
     MatCheckboxModule

  ]
})
export class HomepageModule { }
