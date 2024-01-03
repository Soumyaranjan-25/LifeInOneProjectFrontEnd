import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLockSettingsService {
  private appLockSettingsSubject = new BehaviorSubject<any>(null);
  appLockSettings$ = this.appLockSettingsSubject.asObservable();

  updateAppLockSettings(settings: any) {
    this.appLockSettingsSubject.next(settings);
  }
}
