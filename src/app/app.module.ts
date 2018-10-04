import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { TasksService } from './shared/task.service';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    MainLayoutComponent,
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
