import { Component, EventEmitter, Output } from '@angular/core';
import { RectComponent } from './rect/rect.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RectComponent, FormsModule],
})
export class AppComponent {
  rectSize = {
    width: '100',
    height: '100',
  };

  afterReset(size: { width: string; height: string }) {
    ((this.rectSize.width = size.width), (this.rectSize.height = size.height));
  }
}
