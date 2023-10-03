import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { PasswordChangeDialogComponent } from '../common/password-change-dialog/password-change-dialog.component';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-app-lock',
  templateUrl: './app-lock.component.html',
  styleUrls: ['./app-lock.component.css']
})
export class AppLockComponent {

  constructor(private appService: AppService,
    private dialog: MatDialog,
    private location: Location,
    private snack: MatSnackBar) { }
  apps: any[] = [];
  oldPassword: any = '';
  newPassword: any = '';
  confirmPassword: any = '';
  appLockEnabled: boolean = false;
  isPasswordPopupOpen: boolean = false;
  appLockSettings : any=[];
  lockAppList : any=[];

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
    this.loadAppLockSettings();
  }

  loadAppLockSettings() {
    this.appService.getAppLockSettings().subscribe({
      next: (response) => {
        this.appLockSettings=response.data;
        this.lockAppList=JSON.parse(this.appLockSettings.lockAppList);
        this.appLockEnabled= this.appLockSettings.isAppLockOn;
        console.log(this.appLockSettings);
        console.log(this.lockAppList);
       
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
  goBack(){
    this.location.back();
  }

  ngOnDestroy() {
    this.saveAppLockDetails();
  }

  saveAppLockDetails(){
    if(this.appLockEnabled == true){
     this.appLockSettings.lockAppList=JSON.stringify(this.lockAppList);
    }
    this.appLockSettings.isAppLockOn=this.appLockEnabled;
    this.appService.saveLockSettings(this.appLockSettings).subscribe({
      next : (response)=>{
        console.log(response);
        
        if(response.code == 200){
          this.snack.open(response.message, 'ok', {
            duration: 5000,
            verticalPosition: 'bottom',
          });
        }
        else{
          console.log("Error in password save ! try Again");
          
        }
      }
    });
  }

  onAppLockChange(appId : any){
    const appIdIndex = this.lockAppList.indexOf(appId);
    if (appIdIndex === -1) {
      this.lockAppList.push(appId);
    } else {
      this.lockAppList.splice(appIdIndex, 1);
    }
    console.log(this.lockAppList);
    
  }

  isAppLocked(appId: number): boolean {
    return this.lockAppList.includes(appId);
  }

}
