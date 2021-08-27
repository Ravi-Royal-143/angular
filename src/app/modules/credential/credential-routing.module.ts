import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
    {
        path: 'log-in',
        component: LogInComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'reset/:gmail/:token',
        component: ForgetPasswordComponent
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
export class CredentialRoutingModule { }
