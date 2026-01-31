import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input({ required: true }) data!: Ticket;

  detailsVisible: true | false = false;
  onToggleDetails() {
    this.detailsVisible = !this.detailsVisible;
  }

  @Output() markComplete = new EventEmitter<string>();
  onMarkComplete() {
    this.markComplete.emit(this.data.id);
  }
}
