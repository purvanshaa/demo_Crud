import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrl: './display-task.component.css'
})
export class DisplayTaskComponent {
  tasks: any;

  constructor(private taskService: TaskService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks(){
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log('task',this.tasks)
    });
  }
  navigateToEditTask(taskId: number): void {
    this.router.navigate(['/edit-task', taskId]);
  }
  deleteTask(taskId: number): void {
    console.log(taskId,'taskId')
    this.taskService.deleteTask(taskId).subscribe(
      response => {
        this.getAllTasks();
        console.log('Task deleted successfully:', response);
        // Handle success response
      },
      error => {
        console.error('Error deleting task:', error);
        // Handle error response
      }
    );
  }
}
