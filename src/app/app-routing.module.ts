import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route/empty-route.component';

const routes: Routes = [
  // { path: 'user-details', component: UserDetailsComponent },
  {
    path: 'user-details',
    children: [
      {
        path: '',
        loadChildren: () => import('@modules/user-details/user-details.module').then(m => m.UserDetailsModule)
      }
    ]
  },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
