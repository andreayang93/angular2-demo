import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =  [
    {
        path: 'login',
        loadChildren: 'app/user/customers.module#CustomersModule'
},{
    path: 'admin',
    loadChildren: 'app/main/main.module#MainModule'
  },
    {
        path: '',
        redirectTo: 'login',
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
