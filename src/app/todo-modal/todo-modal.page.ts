import { Component, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.page.html',
  styleUrls: ['./todo-modal.page.scss'],
})
export class TodoModalPage {
  @Input() idProp: string;
  @Input() nameProp: string;
  @Input() detailProp: string;
  taskName = '';
  taskDetail = '';

  constructor(
    private todoService: TodoService,
    private navParams: NavParams,
    private modalController: ModalController
  ) {
    // console.log(navParams.get('nameProp'), navParams.get('detailProp'));
    this.taskName = navParams.get('nameProp');
    this.taskDetail = navParams.get('detailProp');
   }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

  saveTodo() {
    // console.log(this.taskName, this.taskDetail);
    // console.log(this.navParams.get('idProp'), this.navParams.get('nameProp'), this.navParams.get('detailProp'));
    // console.log(this.navParams.get('idProp'));
    if (this.navParams.get('idProp') === '') {
      this.todoService.addItem(this.taskName, this.taskDetail);
    } else {
      this.todoService.updateItem(this.navParams.get('idProp'), this.taskName, this.taskDetail);
    }
    this.dismiss();
    console.log(this.todoService.getAllToDoList());
  }

}
