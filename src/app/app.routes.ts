import { Routes } from '@angular/router';
import { PhotographersComponent } from './pages/photographers/photographers.component';
import { PhotographerpageComponent } from './pages/photographerpage/photographerpage.component';

export const routes: Routes = [
    { path: "", component: PhotographersComponent },
    { path: 'photographer/:id', component: PhotographerpageComponent },

];
