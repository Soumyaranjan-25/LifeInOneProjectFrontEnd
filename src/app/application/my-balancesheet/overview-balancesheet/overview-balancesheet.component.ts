import { Component } from '@angular/core';
import { headerLinks } from 'src/app/environment/headerLink';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-overview-balancesheet',
  templateUrl: './overview-balancesheet.component.html',
  styleUrls: ['./overview-balancesheet.component.css']
})
export class OverviewBalancesheetComponent {
  constructor(private headerService: HeaderService){}

  ngOnInit() {
    this.headerService.sendLinks(headerLinks['my-balancesheet']);
  }
}
