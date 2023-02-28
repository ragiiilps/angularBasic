import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../todos.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  style = 'text-align:center; color:red; font-size:1.2rem'
  styleBtn = 'text-align:center'
  stateChange = false

  todos = []


  todosForm = new FormGroup({
    todo : new FormControl('', Validators.required),
    date : new FormControl('', Validators.required)
  })

  addTodo(todo:any){
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
