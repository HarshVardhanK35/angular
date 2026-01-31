import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/new-task.model';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) userName?: string

  private tasksService: TasksService
  // instantiating tasks-service
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  isAddingTask = false
  onAddingTask() {
    this.isAddingTask = true
  }

  onClosedTask() {
    this.isAddingTask = false
  }
}
