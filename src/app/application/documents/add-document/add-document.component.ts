import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent {
  links:any[]=[{'name':'add-document','url':'./add-document', 'app':'Documents'},
  {'name':'view-document','url':'./view-document', 'app':'Documents'}]

  selectedDocumentType: string="";
  documentTypes: string[] = ['Type 1', 'Type 2', 'Type 3'];

  constructor(private headerService: HeaderService){}
  ngOnInit() {
    this.headerService.sendLinks(this.links);
  }
 

  onFileSelected(event: any) {
    // Handle file selection logic here
    const file: File = event.target.files[0];
    console.log(file);
  }

  uploadDocument() {
    // Handle document upload logic here
    console.log('Document uploaded');
  }
}
