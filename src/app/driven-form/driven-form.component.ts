import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent {

  style = 'text-align:center; color:red; font-size:1.2rem'
  styleBtn = 'text-align:center'
  stateChange = false

  todos = []
  form : NgForm

  addTodo(todo:string){
    this.todos.push(todo)
    console.log(this.todos);

  }

  onChange(){
    if(!this.stateChange){
      this.stateChange = true
    }else{
      this.stateChange =  false
    }
  }
}
