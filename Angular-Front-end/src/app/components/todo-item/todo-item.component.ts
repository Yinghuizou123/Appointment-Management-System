import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  name: string = 'hey';
  constructor() {}

  ngOnInit() {
    console.log(this.todo);
  }

  setClasses() {
    let classes = {
      'service-Name': this.todo.ServiceName
    };
    return classes;
  }
  // onToggle(todo) {
  //   todo.completed = !todo.completed;
  // }
  // onDelete(todo) {
  //   console.log("delete");
  // }
}
