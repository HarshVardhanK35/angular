import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from './user.model';
import { CardsComponent } from '../shared/cards/cards.component';

@Component({
  selector: 'app-user',
  // standalone: true,
  // imports: [CardsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  get imagePath() {
    return "../../assets/users/" + this.user.avatar
  }

  @Output() select = new EventEmitter<string>()

  onSelectingUser() {
    this.select.emit(this.user.id)
  }
}
