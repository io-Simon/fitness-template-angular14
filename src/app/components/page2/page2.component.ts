import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from 'src/app/shared/component-communication.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  constructor(private service: ComponentCommunicationService) {}
  ngOnInit(): void {}

  scrollToBool = false

  scrollTo(){
    this.service.stringFromNav('schedule')
    this.service.stringFromNav('')
    this.scrollToBool = true
    this.service.scrollTo(this.scrollToBool)
    this.scrollToBool = false
    this.service.scrollTo(this.scrollToBool)
  }
}