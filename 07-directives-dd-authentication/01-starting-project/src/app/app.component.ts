import { Component, computed, inject } from '@angular/core';
import { NgIf } from '@angular/common';

import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthComponent } from './auth/auth.component';

import { AuthService } from './auth/auth.service';

import { AuthDirective } from "./auth/auth.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, NgIf, AuthDirective],
})
export class AppComponent {

  private authService = inject(AuthService)

  // get isAdmin() {
  //   return this.authService.activePermission() === "admin"
  // }

  // computed is used: as authService is a signal
  isAdmin = computed(() => this.authService.activePermission() === "admin")
}
