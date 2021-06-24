import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details.component';

const routes: Routes = [
    {
        path: 'add',
        component: UserDetailsComponent
    },
    {
        path: '',
        redirectTo: 'add',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserDetailsRoutingModule { }
