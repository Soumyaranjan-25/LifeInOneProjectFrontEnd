import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-password-change-dialog',
  templateUrl: './password-change-dialog.component.html',
  styleUrls: ['./password-change-dialog.component.css'],
})
export class PasswordChangeDialogComponent {

  constructor(public dialogRef: MatDialogRef<PasswordChangeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { skipOldPassword: boolean },
    private appService: AppService,
    private snack: MatSnackBar) { }

  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  showOldPassword: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;
  oldPasswordError: string = '';
  newPasswordError: string = '';
  confirmPasswordError: string = '';

  appLockSettings : any=[];

  isInputValid: boolean = false;
  

  ngOnInit() {
    this.loadAppLockSettings();
  }
  
  loadAppLockSettings() {
    this.appService.getAppLockSettings().subscribe({
      next: (response) => {
        if(response.data == null){
          this.appLockSettings ={
            password:''
          }
        }
        else{
          this.appLockSettings=response.data;
        }
      },
      error: (error) => {
        console.error('Error fetching in loading app lock settings', error);
      }
    });
  }

  togglePasswordVisibility(fieldName: string) {
    if (fieldName === 'oldPassword') {
      this.showOldPassword = !this.showOldPassword;
    }
    if (fieldName === 'newPassword') {
      this.showNewPassword = !this.showNewPassword;
    }
    if (fieldName === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }
  validateOldPassword() {
    if (this.oldPassword != '') {
      this.oldPasswordError = '';
      this.isInputValid = true;
    }
  }


  validateNewPassword($event: any) {
    const newPasswordPattern = /^[0-9]+$/; // Regular expression to allow only numbers

    if (!this.newPassword) {
      this.newPasswordError = '';
      this.isInputValid = false;
    }
    else if (this.oldPassword == '') {
      this.oldPasswordError = 'Please fill the old password first';
      this.isInputValid = false;
    } else if (!newPasswordPattern.test(this.newPassword)) {
      this.newPasswordError = 'New password must contain only numbers.';
      this.isInputValid = false;
    }
    else if (this.newPassword.length > 4) {
      this.newPasswordError = 'password must be 4 digits';
      this.isInputValid = false;
    } else {
      this.newPasswordError = ''; // Clear the error message when the input is valid
      this.isInputValid = true;
    }
  }



  validateConfirmPassword() {
    if (this.newPassword == '' || this.newPassword == null) {
      this.newPasswordError = 'Please fill the new password field first';
    }
    else if (this.newPassword.length < 4) {
      this.newPasswordError = 'password must be 4 digits';
      this.isInputValid = false;
    }
    else {
      this.confirmPasswordError = '';
      this.isInputValid = true;
    }
  }

  savePassword() {
    if (this.newPassword !== this.confirmPassword) {
          this.confirmPasswordError = 'Confirm password must match the new password.';
          this.isInputValid = false;
    }
    else{
      this.appLockSettings.password=this.newPassword;
      this.appLockSettings.isAppLockOn=true;
      this.appService.saveLockSettings(this.appLockSettings).subscribe({
        next : (response)=>{
          console.log(response);
          
          if(response.code == 200){
            this.snack.open('Password changed Successfully', 'ok', {
              duration: 5000,
              verticalPosition: 'bottom',
            });
            this.dialogRef.close();
          }
          else{
            console.log("Error in password save ! try Again");
            
          }
        }
      });
     
    }
    
  }
}
