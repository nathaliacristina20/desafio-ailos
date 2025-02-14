import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdmissionComponent } from './pages/admission/admission.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'admissao',
                component: AdmissionComponent,
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
