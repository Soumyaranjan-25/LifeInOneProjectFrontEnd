import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { PasswordChangeDialogComponent } from '../common/password-change-dialog/password-change-dialog.component';

@Component({
  selector: 'app-app-lock',
  templateUrl: './app-lock.component.html',
  styleUrls: ['./app-lock.component.css']
})
export class AppLockComponent {

  constructor(private appService: AppService,
    private dialog: MatDialog) { }
  apps: any[] = [];
  oldPassword: any = '';
  newPassword: any = '';
  confirmPassword: any = '';
  appLockEnabled: boolean = false;
  isPasswordPopupOpen: boolean = false;
  appLockSettings : any=[];

  ngOnInit() {
    this.loadModules();
    this.loadAppLockSettings();
  }
  loadModules() {
    this.appService.getAllApps().subscribe({
      next: (response) => {
        this.apps = response.data;
      },
      error: (error) => {
        console.error('Error fetching in loading apps', error);
      }
    });
  }
  openPasswordPopup(skipOldPassword: boolean) {
    const enterAnimationDuration = '1000ms';
    const exitAnimationDuration = '300ms';
    const dialogRef = this.dialog.open(PasswordChangeDialogComponent, {
      width: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { skipOldPassword } // Pass the parameter to the dialog
    });
  }

  loadAppLockSettings() {
    this.appService.getAppLockSettings().subscribe({
      next: (response) => {
        this.appLockSettings=response.data;
       
      },
      error: (error) => {
        console.error('Error fetching in loading app lock settings', error);
      }
    });
  }

  onAppLockToggle() {
    if (this.appLockEnabled && this.appLockSettings == null) {
      this.openPasswordPopup(true); // Pass false to indicate not skipping old password
    }
  }

}
