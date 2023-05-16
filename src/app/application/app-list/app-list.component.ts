import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent {
  modules = [
    { name: 'Contacts', icon: 'person', link:'../add-contact' },
    { name: 'Documents', icon: 'description',link:'' },
    { name: 'Time Schedule', icon: 'schedule',link:'' },
    { name: 'My Photos', icon: 'photo_library',link:'' },
    { name: 'My Notes', icon: 'note' ,link:''},
    { name: 'Food Routine', icon: 'restaurant',link:'' },
    { name: 'Diary', icon: 'book',link:'' },
    { name: 'Weakness', icon: 'sentiment_dissatisfied',link:'' },
    { name: 'Things to Do', icon: 'list',link:'' },
  ];

  links:any[]=[]
  constructor(private headerService: HeaderService){}
  ngOnInit() {
    this.headerService.sendLinks(this.links);
  }
  
}
