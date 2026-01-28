import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type Task } from '../Tasks.model';

import { TaskItemComponent } from "./task-item/task-item.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input({ required: true }) tasks!: Task[]

  selectedFilter: string = "all"

  get filteredTasks(): Task[] {
    switch (this.selectedFilter) {
      case "open":
        return this.tasks.filter((task) => task.status === "OPEN")
      case "in-progress":
        return this.tasks.filter((task) => task.status === "IN_PROGRESS")
      case "done":
        return this.tasks.filter((task) => task.status === "DONE")
      default:
        return this.tasks
    }
  }

  onStatusChange(value: string) {
    this.selectedFilter = value
  }
}
