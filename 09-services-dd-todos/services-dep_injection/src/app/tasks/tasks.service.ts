import { Injectable, signal } from "@angular/core";

import { Task, TaskStatus } from "./task.model";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  private tasks = signal<Task[]>([])
  allTasks = this.tasks.asReadonly()

  addTask(taskData: { title: string, description: string }) {
    const newTask: Task = {
      id: Math.random().toString(),
      status: 'OPEN',
      ...taskData,
    }
    this.tasks.update((oldTasks) => {
      return [...oldTasks, newTask]
    })
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) => oldTasks.map((task) => {
      return task.id === taskId ? { ...task, status: newStatus } : task
    }))
  }
}