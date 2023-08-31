import { Component, Input } from '@angular/core';
import { TradingDataService } from 'src/app/services/trading-data.service';

@Component({
  selector: 'app-view-individual-trading-data',
  templateUrl: './view-individual-trading-data.component.html',
  styleUrls: ['./view-individual-trading-data.component.css']
})
export class ViewIndividualTradingDataComponent {

  @Input() tradingId: any='';
  tradeData:any='';

  constructor(private tradingService: TradingDataService){
    
  }
  ngOnInit() {
    this.loadTradingData();
   
  }
  loadTradingData(){
    this.tradingService.getTradingDataById(this.tradingId).subscribe({
      next: (response) => {
        this.tradeData = response.data;
      },
      error: (error) => {
        console.error('Error fetching trading data by ID:', error);
      }
    });
  }
}
