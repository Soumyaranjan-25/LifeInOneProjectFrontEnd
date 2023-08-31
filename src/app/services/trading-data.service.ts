import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/url';

@Injectable({
  providedIn: 'root'
})
export class TradingDataService {

  constructor(private http: HttpClient) { }

  saveTradingData(tradeData: any, images: any[]): Observable<any> {
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append('files', this.dataURItoBlob(images[i]));
    }
    formData.append('title', tradeData.title);
    formData.append('date', tradeData.date);
    formData.append('shareName', tradeData.shareName);
    formData.append('tradeType', tradeData.tradeType);
    formData.append('buyingPrice', tradeData.buyingPrice);
    formData.append('sellingPrice', tradeData.sellingPrice);
    formData.append('quantity', tradeData.quantity.toString());
    formData.append('profitLoss', tradeData.profitLoss);
    formData.append('reason', tradeData.reason);

    return this.http.post<any>(`${environment.baseUrl}/tradingData/`, formData);
  }

  private dataURItoBlob(dataURI: string) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

  fetchShareNameSuggestions(prefix: string){
    return  this.http.get<string[]>(`${environment.baseUrl}/tradingData/share-suggestions?prefix=${prefix}`)
  }

  GetAllTradingData(){
    return  this.http.get<any>(`${environment.baseUrl}/tradingData/`);
  }

  getTradingDataById(tradingId: number): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/tradingData/${tradingId}`);
  }
}
