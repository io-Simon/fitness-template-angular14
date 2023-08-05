import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from 'src/app/shared/component-communication.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {

  constructor(private service: ComponentCommunicationService) {}
  ngOnInit(): void {}
  
  scrollToBool = false

  scrollTo(){
    this.service.stringFromNav('contact')
    this.service.stringFromNav('')
    this.scrollToBool = true
    this.service.scrollTo(this.scrollToBool)
    this.scrollToBool = false
    this.service.scrollTo(this.scrollToBool)
  }
}
