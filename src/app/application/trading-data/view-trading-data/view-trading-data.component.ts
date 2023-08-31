import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { TradingDataService } from 'src/app/services/trading-data.service';
import { ImageModalComponent } from '../../common/image-modal/image-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-trading-data',
  templateUrl: './view-trading-data.component.html',
  styleUrls: ['./view-trading-data.component.css']
})
export class ViewTradingDataComponent {

  constructor(private headerService: HeaderService,
    private tradingService: TradingDataService,
    private dialog: MatDialog) { }


  links: any[] = [{ 'name': 'Add trading Data', 'url': './add-trading-data', 'app': 'Trading Data' },
  { 'name': 'View trading Data', 'url': './view-trading-data', 'app': 'Trading Data' }]


  tradingData: any[] = [];
  selectTradingId: any = null;
  tradeData: any;
  tradeDataImages: String[] = [];

  ngOnInit() {
    this.headerService.sendLinks(this.links);
    this.GetAllTradingDataToShow();
  }

  GetAllTradingDataToShow() {
    this.tradingService.GetAllTradingData().subscribe({
      next: (response) => {
        console.log(response.data);

        this.tradingData = response.data;
      },
      error: (error) => {
        console.error('Error fetching share name suggestions:', error);
      },
    });
  }

  parseProfit(profitLoss: string): number {
    return parseFloat(profitLoss);
  }
  getProfitColor(profitLoss: string): string {
    const profit = parseFloat(profitLoss);
    return profit >= 0 ? 'green' : 'red';
  }
  getFormattedProfit(profitLoss: string): string {
    const profit = parseFloat(profitLoss);
    return profit >= 0 ? '+' + profit.toFixed(2) : profit.toFixed(2);
  }

  showTradeDetails(tradeData: any) {
    console.log(tradeData);
    this.tradeData = tradeData;
    this.tradeDataImages = this.tradeData.images.split(',')
      .map((filename: string) => filename.trim().replace('[', '').replace(']', ''));
  }

  openImageModal(imageUrl: any) {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      data: { imageUrl: `../../../../assets/tradingData/${imageUrl}` }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  navigateToPrevious() {
    const currentIndex = this.tradingData.findIndex(trade => trade.tradingId === this.tradeData.tradingId);
    if (currentIndex > 0) {
      this.tradeData = this.tradingData[currentIndex - 1];
      this.showTradeDetails(this.tradeData);
    }
  }
  
  navigateToNext() {
    const currentIndex = this.tradingData.findIndex(trade => trade.tradingId === this.tradeData.tradingId);
    if (currentIndex < this.tradingData.length - 1) {
      this.tradeData = this.tradingData[currentIndex + 1];
      this.showTradeDetails(this.tradeData);
    }
  }
 
  goBack() {
    this.tradeData=null;
  }
  
}
