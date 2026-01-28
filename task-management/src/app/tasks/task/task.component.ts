import { Component, inject, Input } from '@angular/core';

import { Task } from './task.model';
import { CardsComponent } from '../../shared/cards/cards.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardsComponent, DatePipe],
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
