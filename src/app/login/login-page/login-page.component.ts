import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder,
    private snack: MatSnackBar,
    private route:Router) { }
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    if (this.loginForm.valid) {
      const formData = new FormData();
      formData.append('userName', this.loginForm.get('userName')?.value);
      formData.append('password', this.loginForm.get('password')?.value);
      this.loginService.generateToken(formData).subscribe({
        next: (res: any) => {
          this.loginService.loginUser(res.token);
          console.log(res);
        },
        error: (e) => {
          console.error(e);
          this.snack.open("Invalid Details !! Try again", '', {
            duration: 3000
          })
        },
        complete: () => {
          console.log("complete");
          this.route.navigate(['../application']);
        }
      });
    }
  }

}
