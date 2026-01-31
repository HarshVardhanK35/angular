import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from './task.model';
import { TasksService } from '../tasks.service';
import { CardsComponent } from '../../shared/cards/cards.component';

@Component({
  selector: 'app-task',
  // standalone: true,
  // imports: [CardsComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({ required: true }) task!: Task

  // instantiate service
  private tasksService = inject(TasksService)

  onCompletingTask() {
    this.tasksService.removeTasks(this.task.id)
  }
}
