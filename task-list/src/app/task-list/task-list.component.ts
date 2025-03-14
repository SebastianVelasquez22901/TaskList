import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

interface Task {
  id: number;
  name: string;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  deleteTask(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskService.deleteTask(id).subscribe(() => {
          this.loadTasks();
          Swal.fire(
            'Eliminado',
            'La tarea ha sido eliminada',
            'success'
          );
        });
      }
    });
  }
}
