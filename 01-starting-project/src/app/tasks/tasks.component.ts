import { Component, Input, signal } from '@angular/core';

import { NewTasksComponent } from './new-tasks/new-tasks.component';

import { type Task } from './Tasks.model';
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NewTasksComponent, TaskListComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  tasks: Task[] = []

  onAddTaskToList(taskData: { title: string; description: string }) {
    this.tasks.push({
      ...taskData,
      id: Math.random().toString(),
      status: "OPEN"
    })
  }
}
