import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  taskId: any;
  task: any = {};

  constructor(private route: ActivatedRoute, private taskService: TaskService,
    private router: Router) { }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.loadTask(this.taskId);
  }
  loadTask(taskId: number): void {
    this.taskService.getTaskById(taskId).subscribe(
      (task: any) => {
        this.task = task;
        console.log('task',this.task)
      },
      error => {
        console.error('Error loading task:', error);
      }
    );
  }
  onSubmit(): void {
    this.taskService.editTask(this.taskId, this.task).subscribe(
      response => {
        console.log('Task edited successfully:', response);
        this.router.navigate(['/home']);
        // Optionally, navigate to another page or display a success message
      },
      error => {
        console.error('Error editing task:', error);
        // Handle error response
      }
    );
  }
}
