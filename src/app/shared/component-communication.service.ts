import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationService {

  private shouldScroll = new BehaviorSubject(false);
  shouldScroll$ = this.shouldScroll.asObservable()

  scrollTo(bool: any) {
    this.shouldScroll.next(bool); 
  }
  
  private receivedText = new BehaviorSubject('');
  receivedText$ = this.receivedText.asObservable()

  stringFromNav(receivedText: string) {
    this.receivedText.next(receivedText); 
  }

}