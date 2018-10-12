import { Component } from '@angular/core';


//annotation : metadata  3 additional info about component class
@Component({
  selector: 'custom-tag', //name of tag
  templateUrl: './app.component.html', //name of html file to render whenever tag is going to used
  styleUrls: ['./app.component.css']  //name of css file containing css rules for that html file
})
export class AppComponent {
  
  constructor(){
   
  }

}
