import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  formAuth: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private webStorageService: StorageService
  ) {
    // 🍦 Form group auth
    this.formAuth = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.webStorageService.clearToken();

    this.formAuth.setValue({
      email: 'admin@corporate.com',
      password: 'royroy',
    });
  }

  onClickSubmit() {
    if (this.formAuth.valid) {
      this.isLoading = !this.isLoading;
      this.webStorageService.setToken(this.formAuth.value);
      this.router.navigate(['/home']);
    }
  }
}
