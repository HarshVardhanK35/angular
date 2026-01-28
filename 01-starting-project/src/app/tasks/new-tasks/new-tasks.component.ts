import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {
  enteredTitle = ""
  enteredText = ""

  @Output() taskData = new EventEmitter<{ title: string; description: string }>()
  onAddTask() {
    this.taskData.emit({
      title: this.enteredTitle,
      description: this.enteredText
    })
  }
}
