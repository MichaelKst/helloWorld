import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'hello',
        pathMatch: 'full'
    },
    {
        path: 'hello',
        loadChildren: () => import('./features/hello/hello.module').then((m) => m.HelloModule)
    },
];
