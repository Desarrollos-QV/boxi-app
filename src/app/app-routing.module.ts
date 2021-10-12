import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'waitpage',
    loadChildren: () => import('./waitpage/waitpage.module').then( m => m.WaitpagePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'set-lenguage',
    loadChildren: () => import('./set-lenguage/set-lenguage.module').then( m => m.SetLenguagePageModule)
  },
  {
    path: 'chkphone',
    loadChildren: () => import('./chkphone/chkphone.module').then( m => m.ChkphonePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./account/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./account/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'setaddress',
    loadChildren: () => import('./account/address/setaddress/setaddress.module').then( m => m.SetaddressPageModule)
  },
  {
    path: 'option-pay',
    loadChildren: () => import('./account/option-pay/option-pay.module').then( m => m.OptionPayPageModule)
  },
  {
    path: 'form-card',
    loadChildren: () => import('./form-card/form-card.module').then( m => m.FormCardPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./page/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./page/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./page/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'how',
    loadChildren: () => import('./page/how/how.module').then( m => m.HowPageModule)
  },
  {
    path: 'add-credit',
    loadChildren: () => import('./account/add-credit/add-credit.module').then( m => m.AddCreditPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./account/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'commanded',
    loadChildren: () => import('./commanded/commanded.module').then( m => m.CommandedPageModule)
  },
  {
    path: 'done-comm',
    loadChildren: () => import('./done-comm/done-comm.module').then( m => m.DoneCommPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
