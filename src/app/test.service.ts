import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { 
  }
  sayWelcome(component : string):void{
    console.log(`Welcome From ${component}`);
  }
  //Aktr men component
}
