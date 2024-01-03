import { Component, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { headerLinks } from 'src/app/environment/headerLink';
import { HeaderService } from 'src/app/services/header.service';
import { TradingDataService } from 'src/app/services/trading-data.service';

@Component({
  selector: 'app-add-trading-data',
  templateUrl: './add-trading-data.component.html',
  styleUrls: ['./add-trading-data.component.css']
})
export class AddTradingDataComponent {

  constructor(private headerService: HeaderService,
    private tradingService: TradingDataService,
    private snack: MatSnackBar) { }

  tradeData: any = {
    title: '',
    date: '',
    shareName: '',
    tradeType: 'buying', // Assuming 'buying' is the default value
    buyingPrice: '',
    sellingPrice: '',
    quantity: 0,
    profitLoss: 0,
    reason: ''
  };

  images: any[] = [];
  isImageUploaded: boolean = false;
  shareNameSuggestions: string[] = [];

  ngOnInit() {
    this.headerService.sendLinks(headerLinks.tradingData);
    this.tradeData.date = this.getTodayDate();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    const suggestionList = document.querySelector('.suggestions-list') as HTMLElement;
    const shareNameInput = document.getElementById('shareName');

    if (targetElement !== suggestionList && targetElement !== shareNameInput) {
      this.shareNameSuggestions = []; // Assuming you clear the suggestions list array to hide the suggestions
    }
  }

  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  onShareNameInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const prefix = inputElement.value;

    this.tradingService.fetchShareNameSuggestions(prefix).subscribe({
      next: (data) => {
        this.shareNameSuggestions = data;
      },
      error: (error) => {
        console.error('Error fetching share name suggestions:', error);
      },
    });
  }

  onTradeTypeChange(tradeType: string) {
    this.tradeData.tradeType = tradeType;
    this.calculatePL();
  }
  onImageChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.images.push(reader.result);
      this.isImageUploaded = true;
    };
    reader.readAsDataURL(file);
  }

  addMoreImages() {
    this.isImageUploaded = false;
    // Clear the input file field to allow selecting more images
    const fileInput = document.getElementById('picture') as HTMLInputElement;
    fileInput.value = '';
  }
  removeImage(index: number) {
    this.images.splice(index, 1);
    this.addMoreImages();
  }

  calculatePL() {
    const sellingPrice = parseFloat(this.tradeData.sellingPrice);
    const buyingPrice = parseFloat(this.tradeData.buyingPrice);
    const quantity = this.tradeData.quantity;
    const tradeType = this.tradeData.tradeType;

    if (!isNaN(sellingPrice) && !isNaN(buyingPrice) && !isNaN(quantity) && quantity != 0) {
      let profitLoss = 0;

      // if (tradeType === 'selling') {
      //   profitLoss = (buyingPrice - sellingPrice) * quantity;
      // } else if (tradeType === 'buying') {
        profitLoss = (sellingPrice - buyingPrice) * quantity;
      // }

      this.tradeData.profitLoss = this.getPLWithSign(profitLoss); // Set the profitLoss with sign
    } else {
      this.tradeData.profitLoss = '0.00';
    }
  }

  getPLWithSign(value: number): string {
    if (value > 0) {
      return '+' + value.toFixed(2);
    } else if (value < 0) {
      return '-' + Math.abs(value).toFixed(2);
    } else {
      return '0.00';
    }
  }
  getPLClass() {
    if (this.tradeData.profitLoss > 0) {
      return 'text-success';
    } else if (this.tradeData.profitLoss < 0) {
      return 'text-danger';
    } else {
      return '';
    }
  }

  isPLWarningVisible(): boolean {
    const buyingPrice = parseFloat(this.tradeData.buyingPrice);
    const sellingPrice = parseFloat(this.tradeData.sellingPrice);
    const quantity = this.tradeData.quantity;

    return isNaN(buyingPrice) || isNaN(sellingPrice) || isNaN(quantity) || quantity == 0;
  }
  resetForm() {
    this.tradeData = {
      title: '',
      date: this.getTodayDate(),
      shareName: '',
      tradeType: 'buying',
      buyingPrice: '',
      sellingPrice: '',
      quantity: 0,
      profitLoss: '0.00',
      reason: ''
    };
    this.images = [];
    this.isImageUploaded = false;
    const fileInput = document.getElementById('picture') as HTMLInputElement;
    fileInput.value = '';
  }

  onSubmit() {
    this.tradingService.saveTradingData(this.tradeData, this.images).subscribe({
      next: (res) => {
        this.snack.open(res.message, '', {
          duration: 3000
        })
        console.log('Trading data saved successfully');
        this.resetForm();

      },
      error: (e) => {
        console.error(e);
        this.snack.open("Error saving trading data !! Try again", '', {
          duration: 5000
        })
      },
    })
  }

  selectShareNameSuggestion(suggestion: string) {
    this.tradeData.shareName = suggestion;
    this.shareNameSuggestions = []; // Clear the suggestions once a suggestion is selected.
  }
}
