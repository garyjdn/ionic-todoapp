import { Injectable } from '@angular/core';
import { ToDo } from '../Models/ToDo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private toDoList: ToDo[] = [
    {
      id: '1',
      name: 'List 1',
      detail: 'lorem ipsum dolor sit amet',
      completed: false
    },
    {
      id: '2',
      name: 'List 2',
      detail: 'lorem ipsum dolor sit amet',
      completed: false
    },
    {
      id: '3',
      name: 'List 3',
      detail: 'lorem ipsum dolor sit amet',
      completed: true
    },
    {
      id: '4',
      name: 'List 4',
      detail: 'lorem ipsum dolor sit amet',
      completed: false
    }
  ];

  constructor() { }

  getAllToDoList() {
    return this.toDoList.filter(item => {
        return item.completed === false;
      });
  }

  getItem(id: string) {
    return {
      ...this.toDoList.find(item => {
        return item.id === id;
      })
    };
  }

  updateItem(id: string, name: string, detail: string) {
    // console.log(detail);
    this.toDoList.forEach(item => {
      if (item.id === id) {
        // console.log(name, detail);
        item.name = name;
        item.detail = detail;
      }
    });
    console.log(this.toDoList);
  }

  toggleItem(id: string) {
    this.toDoList.map(item => {
      if (item.id === id) {
        if (item.completed === true) {
          item.completed = false;
        } else {
          item.completed = true;
        }
      }
    });
  }

  getAllCompletedItem() {
    return [
      ...this.toDoList.filter(item => {
        return item.completed === true;
      })
    ];
  }
}
