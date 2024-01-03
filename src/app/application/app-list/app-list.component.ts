import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { HeaderService } from 'src/app/services/header.service';
import { AppLockPasswordComponent } from '../common/app-lock-password/app-lock-password.component';
import { AppLockSettingsService } from 'src/app/services/app-lock-settings.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent {
  constructor(private headerService: HeaderService,
    private appService: AppService,
    private router: Router,
    private dialog: MatDialog,
    private appLockSettingsService: AppLockSettingsService) { }

  searchQuery: any = "";
  filteredModules: any[] = [];
  modules: any[] = [];
  appLockSettings: any = [];

  links: any[] = [{ 'name': '', 'url': '', 'app': 'Apps' }]

  private appLockSettingsSubscription: any; 

  ngOnInit() {
    this.headerService.sendLinks(this.links);
    this.loadModules();
    this.loadAppLockSettings();

     // Subscribe to app lock settings updates
     this.appLockSettingsSubscription = this.appLockSettingsService.appLockSettings$.subscribe((settings) => {
      this.appLockSettings = settings;
    });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.appLockSettingsSubscription) {
      this.appLockSettingsSubscription.unsubscribe();
    }
  }

  loadAppLockSettings() {
    this.appService.getAppLockSettings().subscribe({
      next: (response) => {
        this.appLockSettings = response.data;
        console.log("appLockSettings "+this.appLockSettings.lockAppList);

      },
      error: (error) => {
        console.error('Error fetching in loading app lock settings', error);
      }
    });
  }

  loadModules() {
    this.appService.getAllApps().subscribe({
      next: (response) => {
        this.modules = response.data;
        this.filteredModules = response.data;
      },
      error: (error) => {
        console.error('Error fetching in loading apps', error);
      }
    });
  }

  onSearch(): void {
    this.filteredModules = this.modules.filter(module =>
      module.appName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onAppClick(module: any) {
    if (this.appLockSettings.isAppLockOn) {
      const password=this.appLockSettings.password;
      if (this.appLockSettings.lockAppList.includes(module.appId)) {
        const enterAnimationDuration = '1000ms';
        const exitAnimationDuration = '300ms';
        const dialogRef = this.dialog.open(AppLockPasswordComponent, {
          enterAnimationDuration,
          exitAnimationDuration,
          data: { password } // Pass the parameter to the dialog
        });

        dialogRef.componentInstance.successStatus.subscribe((successStatus) => {
          if (successStatus) {
            dialogRef.close();
            this.router.navigate([module.link]);
          }
        });
      } else {
        this.router.navigate([module.link]);
      }
    } else {
      this.router.navigate([module.link]);
    }
  }

}
