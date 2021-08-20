import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route/empty-route.component';
import { IsauthenticatedService } from './heplers/isauthenticated/isauthenticated.service';

const routes: Routes = [
  // { path: 'user-details', component: UserDetailsComponent },
  {
    path: 'user-details',
    children: [
      {
        path: 'chat',
        canActivate: [IsauthenticatedService],
        loadChildren: () => import('@modules/chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: '',
        loadChildren: () => import('@modules/user-details/user-details.module').then(m => m.UserDetailsModule)
      }
    ]
  },
  {
    path: 'posts',
    canActivate: [IsauthenticatedService],
    loadChildren: () => import('@modules/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('@modules/credential/credential.module').then(m => m.CredentialModule)
  },
  {
    path: '',
    redirectTo: 'user-details',
    pathMatch: 'full'
  },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
