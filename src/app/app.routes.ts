import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';

export const routes: Routes = [
   {path: 'home',component: HomeComponentComponent},
   {path: 'about',component: AboutComponentComponent}
];
