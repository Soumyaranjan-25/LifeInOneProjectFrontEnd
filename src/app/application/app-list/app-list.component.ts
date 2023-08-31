import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent {
  constructor(private headerService: HeaderService,
    private appService: AppService) { }

  searchQuery: any = "";
  filteredModules: any[] = [];
  modules :any[]=[];
 
  links: any[] = [{ 'name': '', 'url': '', 'app': 'Apps' }]

  ngOnInit() {
    this.headerService.sendLinks(this.links);
    this.loadModules();
  }
  loadModules() {
    this.appService.getAllApps().subscribe({
      next: (response) => {
        this.modules = response.data;
        this.filteredModules=response.data;
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

}
