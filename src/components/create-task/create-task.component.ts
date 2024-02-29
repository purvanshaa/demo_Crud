import { Component } from '@angular/core';
import { TaskCreateService } from '../../services/create-task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  taskTitle: string = '';
  taskDescription: string = '';

  constructor(private taskService: TaskCreateService,
    private router: Router) {}

  onSubmit() {
    const taskData = {
      title: this.taskTitle,
      description: this.taskDescription
    };
console.log('taskData',taskData)
alert(taskData)
    this.taskService.addTask(taskData).subscribe(response => {
      console.log('Task created successfully:', response);
      this.router.navigate(['/home']);
      // Optionally, you can navigate to a different route after creating the task
    }, error => {
      alert(error)
      console.error('Error creating task:', error);
    });
  }
}
