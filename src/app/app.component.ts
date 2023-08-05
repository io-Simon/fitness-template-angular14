import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { ComponentCommunicationService } from './shared/component-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private service: ComponentCommunicationService){}
  topArrow= 'keyboard_double_arrow_up'
  title = 'Strong Company';

  @ViewChild('landing', {static: true}) home! : ElementRef;
  @ViewChild('schedule', {static: true}) about! : ElementRef;
  @ViewChild('contact', {static: true}) portfolio! : ElementRef;

  toScroll(receivedNavString: string){
 
    if(receivedNavString === 'landing'){
      this.home.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if(receivedNavString === 'schedule'){
      this.about.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if(receivedNavString === 'contact'){
      this.portfolio.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  ngOnInit(): void{
    this.service.receivedText$.pipe(distinctUntilChanged())
    .subscribe((value) => {
      switch(value){
        case 'landing':
          this.toScroll('landing')
          break;
        case 'schedule':
          this.toScroll('schedule')
          break;
        case 'contact':
          this.toScroll('contact')
          break;
        default:
          break;
      }
    });
}
}
