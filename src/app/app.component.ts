import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  todoValue: string = "";
  list: Todo[] = [];

  ngOnInit(){
    this.list = [];
    this.todoValue = "";
  }

  addTask(){
    if(this.todoValue !== ""){
      const newItem: Todo={
        id:Date.now(),
        val: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
    }
    this.todoValue="";
  }
  deleteTask(id:number){
    this.list = this.list.filter(item=> item.id !== id);
  }
}
