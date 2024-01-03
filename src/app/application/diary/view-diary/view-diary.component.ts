import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DiaryService } from 'src/app/services/diary.service';
import { HeaderService } from 'src/app/services/header.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { headerLinks } from 'src/app/environment/headerLink';
@Component({
  selector: 'app-view-diary',
  templateUrl: './view-diary.component.html',
  styleUrls: ['./view-diary.component.css']
})
export class ViewDiaryComponent {
  constructor(private headerService: HeaderService,
    private diaryService: DiaryService,
    private snack: MatSnackBar,
    private sanitizer: DomSanitizer,
    private router: Router) { }


  diaryList: any = [];

  // blur the content
  selectedDiaryIndex: number | null = null;
  private unblurTimer: any;

  // Sanitize the HTML content to display safely in the template
  sanitizeHTML(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  ngOnInit() {
    this.headerService.sendLinks(headerLinks.diary);
    this.getAllDiary();
  }
  getAllDiary() {
    this.diaryService.getAllDiary().subscribe({
      next: (res) => {
        console.log(res);
        this.diaryList = res;

      },
      error: (e) => {
        console.error(e);
        this.snack.open("Could not fetch Diaries !! Try again", '', {
          duration: 5000
        })
      },
    })
  }
  redirectToWriteDiary(diaryId: number) {
    this.router.navigate(['/write-diary', diaryId]);
  }

  onMouseEnter(index: number) {
    this.selectedDiaryIndex = index;

    // Clear existing timer (if any)
    if (this.unblurTimer) {
      clearTimeout(this.unblurTimer);
    }

    // Set a new timer for 30 seconds
    this.unblurTimer = setTimeout(() => {
      this.onMouseLeave();
    }, 30000); 
  }

  onMouseLeave() {
    this.selectedDiaryIndex = null;
    clearTimeout(this.unblurTimer);
  }
}
