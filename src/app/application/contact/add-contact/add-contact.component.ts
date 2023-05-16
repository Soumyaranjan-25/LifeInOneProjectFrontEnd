import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  links:any[]=[{'name':'add-contact','url':'./add-contact'},
  {'name':'view-contact','url':'./view-conatct'}]
  constructor(private headerService: HeaderService){}
  ngOnInit() {
    this.headerService.sendLinks(this.links);
  }
}
