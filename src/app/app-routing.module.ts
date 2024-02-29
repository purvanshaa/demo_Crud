import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTaskComponent } from '../components/display-task/display-task.component';
import { CreateTaskComponent } from '../components/create-task/create-task.component';
import { EditTaskComponent } from '../components/edit-task/edit-task.component';

const routes: Routes = [
  // { path: 'task', component: DisplayTaskComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DisplayTaskComponent },
  { path: 'create-task', component: CreateTaskComponent },
  { path: 'edit-task/:id', component: EditTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
