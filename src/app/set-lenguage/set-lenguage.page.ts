import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServiceService } from '../service/service.service';
 
@Component({
  selector: 'app-set-lenguage',
  templateUrl: './set-lenguage.page.html',
  styleUrls: ['./set-lenguage.page.scss'],
})
export class SetLenguagePage implements OnInit {

  lang: string = 'es';
  constructor(
    public server :ServiceService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
      console.log(localStorage.getItem('lenguage'));
      this.lang = localStorage.getItem('lenguage');
    }else {
      this.server.globalize('es');
    }
  }



  async ChangeLang()
  {
    this.server.globalize(this.lang);
  }

  saveLang()
  {
    localStorage.setItem('lenguage',this.lang);
    this.server.globalize(this.lang);
    this.modalController.dismiss();
  }

}
