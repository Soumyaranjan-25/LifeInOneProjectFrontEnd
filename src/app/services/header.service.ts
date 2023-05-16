import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private linksSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public links$: Observable<any[]> = this.linksSubject.asObservable();

  sendLinks(links: any[]) {
    this.linksSubject.next(links);
  }
}
