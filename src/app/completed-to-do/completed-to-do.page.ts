import { Component, OnInit } from '@angular/core';
import { ToDo } from '../Models/ToDo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-completed-to-do',
  templateUrl: './completed-to-do.page.html',
  styleUrls: ['./completed-to-do.page.scss'],
})
export class CompletedToDoPage implements OnInit {
  todo: ToDo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todo = this.todoService.getAllCompletedItem();
  }

  toggleCheck(id: string) {
    this.todoService.toggleItem(id);
    this.todo = this.todoService.getAllCompletedItem();
  }
}
