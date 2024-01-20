import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class EncryptionDecryptionService {

  private secretKey = 'a5a9671c8f8b41d1b48e409c07e9e384';

  encryptData(data: any): string {
    return CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
  }

  decryptData(encryptedData: string): any {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    return JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
  }

  // encText(plainText:any) {
  //   let encKey = environment.apiHashingKey;
  //   let text = plainText;
  //   let iv = CryptoJS.enc.Hex.parse(environment.encryptIV);
  //   return btoa(CryptoJS.AES.encrypt(text, encKey, { iv: iv }).toString());
  // }

  // decText(encryptedText:any) {
  //   encryptedText = atob(encryptedText);
  //   let encKey = environment.apiHashingKey;
  //   let iv = CryptoJS.enc.Hex.parse(environment.encryptIV);
  //   var decryptText = CryptoJS.AES.decrypt(encryptedText, encKey, { iv: iv });
  //   return decryptText.toString(CryptoJS.enc.Utf8);
  // }

  // apiHashingKey: '22CSMTOOL2022',

}
