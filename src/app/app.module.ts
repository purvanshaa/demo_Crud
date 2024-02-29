import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayTaskComponent } from '../components/display-task/display-task.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTaskComponent } from '../components/create-task/create-task.component';
import { FormsModule } from '@angular/forms';
import { EditTaskComponent } from '../components/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTaskComponent,
    CreateTaskComponent,
    EditTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
