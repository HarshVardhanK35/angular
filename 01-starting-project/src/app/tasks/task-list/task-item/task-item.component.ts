import { Component, Input } from '@angular/core';
import { Task } from '../../Tasks.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})

export class TaskItemComponent {
  @Input({ required: true }) task!: Task
}
