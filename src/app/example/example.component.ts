import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  style = 'text-align:center; color:red; font-size:1.2rem'
  styleBtn = 'text-align:center'
  stateChange = false

  onChange(){
    if(!this.stateChange){
      this.stateChange = true
    }else{
      this.stateChange =  false
    }
  }

}
