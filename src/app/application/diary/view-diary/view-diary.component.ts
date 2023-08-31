import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DiaryService } from 'src/app/services/diary.service';
import { HeaderService } from 'src/app/services/header.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
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

  links: any[] = [{ 'name': 'write-diary', 'url': './write-diary', 'app': 'Diary' },
  { 'name': 'view-diary', 'url': './view-diary', 'app': 'Diary' }]


  diaryList: any = [];

  // Sanitize the HTML content to display safely in the template
  sanitizeHTML(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  ngOnInit() {
    this.headerService.sendLinks(this.links);
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
}
