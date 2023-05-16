import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private snack: MatSnackBar,
              private route:Router
    ) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  signIn() {
    if (this.signInForm.valid) {
      const formData = new FormData();
      formData.append('userName', this.signInForm.get('userName')?.value);
      formData.append('password', this.signInForm.get('password')?.value);
      formData.append('email', this.signInForm.get('email')?.value);
      this.userService.addUser(formData).subscribe({

        next: (res: any) => {
          console.log(res);

          this.snack.open("Successfully Registered with user Id : " + res.userId, 'ok', {
            duration: 5000,
            verticalPosition: 'bottom'
          })
        },
        error: (e) => {
          console.error(e);
          this.snack.open("Invalid Details !! Try again", '', {
            duration: 3000
          })
        },
        complete: () => {
          console.log("complete");
          this.route.navigate(['/loginPage']);
        }
        
      });
    }

  }
}
