import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  name: string = '';

  @Output() taskAdded = new EventEmitter<void>();

  constructor(private taskService: TaskService) { }

  addTask(): void {
    if (this.name.trim()) {
      this.taskService.addTask(this.name).subscribe(() => {
        this.name = '';
        this.taskAdded.emit(); // Emitir el evento cuando se agrega una tarea
        Swal.fire({
          icon: 'success',
          title: 'Tarea agregada',
          text: 'La tarea se ha agregado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La tarea no puede estar vacía',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
