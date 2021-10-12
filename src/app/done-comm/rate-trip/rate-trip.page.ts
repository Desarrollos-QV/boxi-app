import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ServiceService } from '../../service/service.service';  
 
@Component({
  selector: 'app-rate-trip',
  templateUrl: './rate-trip.page.html',
  styleUrls: ['./rate-trip.page.scss'],
})
export class RateTripPage implements OnInit {

  @Input() data_post: string;

  data:any;
  text:any;
  
  
  star 		= 0;

  good_attention: any;
  ffficient_delivery: any;
  covid_prevention: any;
  covid_prevention_product: any;
  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController,
    public modalController: ModalController,
    public server: ServiceService,
    public nav: NavController
  ) { 
    this.text = JSON.parse(localStorage.getItem('app_text'));
  }

  ngOnInit() {
    this.data = JSON.parse(this.data_post);

    console.log(this.data);
  }

  ionViewWillEnter()
  {
    if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
      console.log(localStorage.getItem('lenguage'));
      this.server.globalize(localStorage.getItem('lenguage'));
    }else {
      this.server.SetLenguage();
    }
  }
  
  setStar(val)
  {
  	this.star = val;
  }

  async giveRating(data)
  {
  	if(this.star == 0)
  	{
  		this.presentToast('Seleccione cualquier calificación para continuar.','warning');
  	}
  	else
  	{
      const loading = await this.loadingController.create({
	      message: 'Enviando Calificación',
	      duration: 3000
	    });
	    await loading.present();

      var allData = {
        comment : data.comment,
        user_id : localStorage.getItem('user_id'),
        star : this.star,
        oid : this.data.event.id,
        d_boy : this.data.dboy.id,
        good_attention : data.good_attention,
        efficient_delivery : data.efficient_delivery,
      }

	  	this.server.rateComm_event(allData).subscribe((response:any) => {
        console.log(response);
        loading.dismiss();
		    this.presentToast('¡Gracias! Calificación enviada con éxito.','success');	
        this.modalController.dismiss();
      });
    }
  }
 
  async presentToast(txt,color) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position : 'top',
      color: color
    });
    toast.present();
  }

}
