import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LibreryComponent } from './components/librery/librery.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FAQComponent } from './components/faq/faq.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { AccountComponent } from './components/account/account.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },

  {
    path: 'librery',
    component: LibreryComponent,
  },

  {
    path: 'aboutus',
    component: AboutUsComponent,
  },

  {
    path: 'faq',
    component: FAQComponent,
  },

  {
    path: 'subscription',
    component: SubscriptionsComponent,
  },
  
  {
    path: 'account',
    component: AccountComponent,
  },

];
