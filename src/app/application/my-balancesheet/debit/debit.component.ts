import { Component } from '@angular/core';
import { headerLinks } from 'src/app/environment/headerLink';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent {
  constructor(private headerService: HeaderService){}

  ngOnInit() {
    this.headerService.sendLinks(headerLinks['my-balancesheet']);
  }
}
