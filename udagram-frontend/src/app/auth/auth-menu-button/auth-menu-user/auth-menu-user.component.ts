import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-auth-menu-user',
  templateUrl: './auth-menu-user.component.html',
  styleUrls: ['./auth-menu-user.component.scss'],
})
export class AuthMenuUserComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
