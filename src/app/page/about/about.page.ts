import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ToastController,NavController,Platform,LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  data:any;
  text:any;
  constructor(
    public server: ServiceService,
    public toastController: ToastController,
    private nav: NavController,
    public loadingController: LoadingController
  ) {
    this.text = JSON.parse(localStorage.getItem('app_text'));
   }

   ngOnInit()
  {
  	this.loadData();
  }

  async loadData()
  {
  	const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 3000
    });
    await loading.present();

  	this.server.pages().subscribe((response:any) => {
	
	  this.data = response.data;

    console.log(this.data);

  	loading.dismiss();

  	});
  }

}
