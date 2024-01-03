import { Component } from '@angular/core';
import { headerLinks } from 'src/app/environment/headerLink';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-monthly-balancesheet',
  templateUrl: './monthly-balancesheet.component.html',
  styleUrls: ['./monthly-balancesheet.component.css']
})
export class MonthlyBalancesheetComponent {
  constructor(private headerService: HeaderService){}

  ngOnInit() {
    this.headerService.sendLinks(headerLinks['my-balancesheet']);
  }
}
