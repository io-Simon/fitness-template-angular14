import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from 'src/app/shared/component-communication.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

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
