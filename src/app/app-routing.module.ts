import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllTestsComponent } from './pages/all-tests/all-tests.component';
import { AllActivationsComponent } from './pages/all-activations/all-activations.component';
import { AllRespondentsComponent } from './pages/all-respondents/all-respondents.component';
import { CreateNewTestComponent } from './pages/create-new-test/create-new-test.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
    { path: '', component: LoginPageComponent },
    {
        path: 'admin',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: '', redirectTo: '/all-tests', pathMatch: 'full' },
            { path: 'all-tests', component: AllTestsComponent },
            { path: 'all-activations', component: AllActivationsComponent },
            { path: 'create-new-test', component: CreateNewTestComponent },
            { path: 'all-respondents', component: AllRespondentsComponent },
        ]
    },
    { path: 'test', component: TestComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [AuthGuard],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
