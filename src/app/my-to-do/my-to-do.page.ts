import { Component, OnInit } from '@angular/core';
import { ToDo } from '../Models/ToDo.model';
import { TodoService } from '../services/todo.service';
import { ModalController } from '@ionic/angular';
import { TodoModalPage } from '../todo-modal/todo-modal.page';

@Component({
  selector: 'app-my-to-do',
  templateUrl: './my-to-do.page.html',
  styleUrls: ['./my-to-do.page.scss'],
})
export class MyToDoPage implements OnInit {
  todo: ToDo[];

  constructor(
    private todoService: TodoService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.todo = this.todoService.getAllToDoList();
  }

  async openModal(id?: string, name?: string, detail?: string) {
    // console.log(id, name, detail);
    const modal = await this.modalController.create({
      component: TodoModalPage,
      componentProps: {
        idProp: id ? id : '',
        nameProp: name ? name : '',
        detailProp: detail ? detail : '',
      }
    });
    return await modal.present();
  }

  toggleCheck(id: string) {
    this.todoService.toggleItem(id);
    this.todo = this.todoService.getAllToDoList();
  }
}
