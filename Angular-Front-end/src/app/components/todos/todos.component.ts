import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        ServiceName: 'Back',
        ServiceTime1: '30 minutes',
        ServiceTime2: '45 minutes',
        ServiceTime3: '60 minutes',
        ServiceTime4: '90 minutes',
        ServiceTime1Price: '$ 30',
        ServiceTime2Price: '$ 40 ',
        ServiceTime3Price: '$ 45',
        ServiceTime4Price: '$ 65'
      },
      {
        id: 2,
        ServiceName: 'Foot',
        ServiceTime1: '30 minutes',
        ServiceTime2: '60 minutes',
        ServiceTime3: '90 minutes',
        ServiceTime4: '',
        ServiceTime1Price: '$ 25',
        ServiceTime2Price: '$ 40 ',
        ServiceTime3Price: '$ 55',
        ServiceTime4Price: ''
      },
      {
        id: 3,
        ServiceName: 'Facial',
        ServiceTime1: '60 minutes',
        ServiceTime2: '',
        ServiceTime3: '',
        ServiceTime4: '',
        ServiceTime1Price: '$ 60',
        ServiceTime2Price: '',
        ServiceTime3Price: '',
        ServiceTime4Price: ''
      },
      {
        id: 4,
        ServiceName: 'Mini Facial',
        ServiceTime1: '30 minutes',
        ServiceTime2: '',
        ServiceTime3: '',
        ServiceTime4: '',
        ServiceTime1Price: '$ 35',
        ServiceTime2Price: '',
        ServiceTime3Price: '',
        ServiceTime4Price: ''
      },
      {
        id: 5,
        ServiceName: 'Cupping',
        ServiceTime1: '15 minutes',
        ServiceTime2: '',
        ServiceTime3: '',
        ServiceTime4: '',
        ServiceTime1Price: '$ 15',
        ServiceTime2Price: '',
        ServiceTime3Price: '',
        ServiceTime4Price: ''
      },
      {
        id: 6,
        ServiceName: 'Scraping',
        ServiceTime1: '15 minutes',
        ServiceTime2: '',
        ServiceTime3: '',
        ServiceTime4: '',
        ServiceTime1Price: '$ 15',
        ServiceTime2Price: '',
        ServiceTime3Price: '',
        ServiceTime4Price: ''
      }
    ];
  }
}
