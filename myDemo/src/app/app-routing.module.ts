import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { AdminComponent } from './main/admin/admin.component';

const routes: Routes =  [
    {
        path: 'login',
    loadChildren: 'app/main/main.module#MainModule',
    children: [{
        path: 'admin',
    loadChildren: 'app/customers/customers.module#CustomersModule'
    }] 
},
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
]


@NgModule({
    providers: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}