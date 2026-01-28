import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // encapsulation: ViewEncapsulation.None,
  host: { 
    class: "dashboard-item"
  }
})
export class DashboardItemComponent {
  @Input({ required: true }) image!: { srcPath: string, altText: string }
  @Input({ required: true }) title!: string
}
