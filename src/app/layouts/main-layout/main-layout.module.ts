import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainLayoutRoutes } from './main-layout.routing';
import { TimerComponent } from '../../timer/timer.component';
import { MyTasksComponent } from '../../my-tasks/my-tasks.component';
import { NgxPaginationModule } from 'ngx-pagination';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    NgxPaginationModule
  ],
  declarations: [
    TimerComponent,
    MyTasksComponent,
  ]
})

export class MainLayoutModule {}
