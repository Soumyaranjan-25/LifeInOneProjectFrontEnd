import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DiaryService } from 'src/app/services/diary.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-write-diary',
  templateUrl: './write-diary.component.html',
  styleUrls: ['./write-diary.component.css'],
})
export class WriteDiaryComponent implements OnInit {
  links: any[] = [
    { name: 'write-diary', url: './write-diary', app: 'Diary' },
    { name: 'view-diary', url: './view-diary', app: 'Diary' },
  ];
  constructor(
    private headerService: HeaderService,
    private diaryService: DiaryService,
    private snack: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  diary: any;
  public Editor: any = ClassicEditor;
  editorConfig: any = {
    fullPage: true,
  };

  ngOnInit() {
    this.diary = {
      diaryId: '',
      diaryContent: '',
    };
    this.headerService.sendLinks(this.links);

    this.route.params.subscribe((params) => {
      const diaryId = params['id'];
      if (diaryId) {
        this.getDiaryById(diaryId);
      }
    });
  }

  onSave() {
    if (this.diary.diaryContent.trim() === '') {
      this.snack.open('Diary content cannot be empty', '', {
        duration: 3000,
        verticalPosition: 'bottom',
      });
      return;
    }

    this.diaryService.saveDiary(this.diary).subscribe(
      (res: any) => {
        console.log(res);
        this.snack.open('Diary Saved Successfully', 'ok', {
          duration: 5000,
          verticalPosition: 'bottom',
        });
        this.resetDiary();
      },
      (error) => {
        console.error(error);
        this.snack.open('Failed to save diary. Please try again', '', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      }
    );
  }

  onCancel() {
    this.router.navigate(['/view-diary']); // Navigate back to the view-diary component
  }

  // Fetch diary content based on diaryId
  getDiaryById(diaryId: number) {
    this.diaryService.getDiaryById(diaryId).subscribe(
      (res: any) => {
        console.log(res);
        // Assuming the response has the property "diaryContent"
        this.diary = {
          diaryId: diaryId,
          diaryContent: res.diaryContent, // Assign the fetched diary content to "diary.diaryContent"
        };
      },
      (error) => {
        console.error(error);
        this.snack.open('Could not fetch Diary. Please try again', '', {
          duration: 5000,
          verticalPosition: 'bottom',
        });
      }
    );
  }

  resetDiary() {
    this.diary = {
      diaryId: '',
      diaryContent: '',
    };
  }
}
