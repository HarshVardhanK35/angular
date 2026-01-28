import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  @Input({ required: true }) size!: { width: string; height: string };

  @Output() resetSize = new EventEmitter<{ width: string; height: string }>()
  onReset() {
    this.resetSize.emit({
      width: "100",
      height: "100"
    })
  }
}
