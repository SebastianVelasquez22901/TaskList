import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddTaskComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-list';

  @ViewChild('taskList') taskList: TaskListComponent | null = null;

  onTaskAdded(): void {
    this.taskList!.loadTasks(); // Llamar al método loadTasks del componente TaskListComponent
  }
}
