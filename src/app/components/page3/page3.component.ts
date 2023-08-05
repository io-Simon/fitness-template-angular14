import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from 'src/app/shared/component-communication.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {
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