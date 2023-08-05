import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from 'src/app/shared/component-communication.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private service: ComponentCommunicationService) { }

  scrollToBool = false

  /*scrollTo func sends a string with the details of where to navigate to, to a shared service (ComponentCommunicationService), 
  which then sends this value to app.component.html (parent component). To execute scroll, a simple boolean is sent to the service
  and then to the parent component. After both the string and boolean are sent, their values are reset to allow future usage of these
  buttons. This setup is replicated in multiple components */ 
  
  scrollTo(){
    this.service.stringFromNav('schedule')
    this.service.stringFromNav('')
    this.scrollToBool = true
    this.service.scrollTo(this.scrollToBool)
    this.scrollToBool = false
    this.service.scrollTo(this.scrollToBool)
  }

  ngOnInit(): void {
  }

}
