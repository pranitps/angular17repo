import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
    {
        path: '',
        component: App,
    },
    {
        path: 'customers',
        loadChildren: () => 
            import('./customers/customers-module').then((m) => m.CustomersModule),
    },
    {
        path: 'orders',
        loadChildren: () => 
            import('./orders/orders-module').then((m) => m.OrdersModule),
    }
];
