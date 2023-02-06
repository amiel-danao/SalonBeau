import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomerLoginPage } from './customer-login/customer-login.page';
import {
  canActivate,} from '@angular/fire/auth-guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: '',
    redirectTo: 'slashscreen',
    pathMatch: 'full',
  },
  {
    path: 'slashcreen',
    loadChildren: () =>
      import('./slashcreen/slashcreen.module').then(
        (m) => m.SlashcreenPageModule
      ),
  },

  {
    path: 'login',
    component: CustomerLoginPage,
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'user-appointment/:id',
    loadChildren: () =>
      import('./user-appointment/user-appointment.module').then(
        (m) => m.UserAppointmentPageModule
      ),
  },
  {
    path: 'user-appointment/:id/:service',
    loadChildren: () =>
      import('./user-appointment/user-appointment.module').then(
        (m) => m.UserAppointmentPageModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./salon/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: 'user-salon-services',
    loadChildren: () =>
      import('./user-salon-services/user-salon-services.module').then(
        (m) => m.UserSalonServicesPageModule
      ),
  },
  {
    path: 'saloninter/:id',
    loadChildren: () =>
      import('./saloninter/saloninter.module').then(
        (m) => m.SaloninterPageModule
      ),
  },
  {
    path: 'addservice',
    loadChildren: () =>
      import('./salon/addservice/addservice.module').then(
        (m) => m.AddservicePageModule
      ),
  },
  {
    path: 'apptsched',
    loadChildren: () =>
      import('./salon/apptsched/apptsched.module').then(
        (m) => m.ApptschedPageModule
      ),
  },
  {
    path: 'ratings',
    loadChildren: () =>
      import('./ratings/ratings.module').then((m) => m.RatingsPageModule),
  },
  {
    path: 'salonregis',
    loadChildren: () =>
      import('./salon/salonregis/salonregis.module').then(
        (m) => m.SalonregisPageModule
      ),
  },
  {
    path: 'salonregis/:id',
    loadChildren: () =>
      import('./salon/salonregis/salonregis.module').then(
        (m) => m.SalonregisPageModule
      ),
  },
  {
    path: 'forgotpass',
    loadChildren: () =>
      import('./forgotpass/forgotpass.module').then(
        (m) => m.ForgotpassPageModule
      ),
  },
  {
    path: 'customer-login',
    loadChildren: () =>
      import('./customer-login/customer-login.module').then(
        (m) => m.CustomerLoginPageModule
      ),
  },
  {
    path: 'stylist',
    loadChildren: () => import('./salon/stylist/stylist.module').then( m => m.StylistPageModule)
  },  {
    path: 'manageschedule',
    loadChildren: () => import('./salon/manageschedule/manageschedule.module').then( m => m.ManageschedulePageModule)
  },


 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
