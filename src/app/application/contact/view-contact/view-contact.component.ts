import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {
  links:any[]=[{'name':'add-contact','url':'./add-contact'},
  {'name':'view-contact','url':'./view-contact'}]
  constructor(private headerService: HeaderService){}
  ngOnInit() {
    this.headerService.sendLinks(this.links);
  }
}
