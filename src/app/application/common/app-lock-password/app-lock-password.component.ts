import { Component, ElementRef, EventEmitter, Inject, Output, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-app-lock-password',
  templateUrl: './app-lock-password.component.html',
  styleUrls: ['./app-lock-password.component.css']
})
export class AppLockPasswordComponent implements AfterViewInit {

  inputFields: ElementRef[] = [];

  constructor(
    public dialogRef: MatDialogRef<AppLockPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { password: any },
    private snack: MatSnackBar
  ) { }

  digit1: string = '';
  digit2: string = '';
  digit3: string = '';
  digit4: string = '';
  showError: boolean = false;

  @Output() successStatus = new EventEmitter<boolean>();

  @ViewChildren('input') set inputElements(inputElements: QueryList<ElementRef>) {
    this.inputFields = inputElements.toArray();
  }

  // Check if the inputElements array is initialized before you access it.
  ngAfterViewInit() {
    this.focus();
  }

  focus() {
    if (!this.inputFields) {
      return;
    }

    this.inputFields[0].nativeElement.focus();
  }

  onDigitInput(index: number, event: any) {
    if (!this.inputFields) {
      return;
    }
    else {
      if (event.target.value === '') {
        this.showError = false;
        // Focus on the previous input element.
        const previousInputElement = event.target.previousElementSibling as HTMLInputElement;
        if (previousInputElement) {
          previousInputElement.focus();
        }
      }
      if (event.target.value.length === 1) {
        // Focus on the next input element.
        const nextInputElement = event.target.nextElementSibling as HTMLInputElement;
        if (nextInputElement) {
          nextInputElement.focus();
        } else {
          const combinedInput = this.digit1 + this.digit2 + this.digit3 + this.digit4;
          if (combinedInput == this.data.password) {
            this.successStatus.emit(true);
          }
          else {
            this.showError = true;
          }
        }
      }
      // if (event.target.value.length > 1) {
      //   const newEvent = new Event('input');
      //   newEvent.target = {
      //     value: event.target.value[event.target.value.length - 1],
      //   };
      //   this.onDigitInput(index + 1,newEvent);
      // }
    }
  }
}