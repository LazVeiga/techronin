import { Component } from '@angular/core';
import {DefaultLoginLayoutComponent} from "../../components/templates/default-login-layout/default-login-layout.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PrimaryInputComponent} from "../../components/templates/primary-input/primary-input.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
    NgOptimizedImage,
  ],
  selector: 'app-login',
  standalone: true,
  styleUrl: './login.component.scss',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }
}
