import { Component, Input } from "@angular/core";
import { TasksComponent } from "./tasks/tasks.component";
import { Task } from "./tasks/Tasks.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [TasksComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {

}