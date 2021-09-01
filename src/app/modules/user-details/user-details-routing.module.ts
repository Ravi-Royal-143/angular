import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlamesComponent } from '@modules/flames/flames.component';

const routes: Routes = [
    {
        path: 'flames',
        component: FlamesComponent
    },
    {
        path: '',
        redirectTo: 'flames',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserDetailsRoutingModule { }
