import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllTestsComponent} from './pages/all-tests/all-tests.component';
import {AllActivationsComponent} from './pages/all-activations/all-activations.component';
import {AllRespondentsComponent} from './pages/all-respondents/all-respondents.component';
import {CreateNewTestComponent} from './pages/create-new-test/create-new-test.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
    {path: '', redirectTo: '/all-tests', pathMatch: 'full'},
    {path: 'all-tests', component: AllTestsComponent},
    {path: 'all-activations', component: AllActivationsComponent},
    {path: 'create-new-test', component: CreateNewTestComponent},
    {path: 'all-respondents', component: AllRespondentsComponent},
    { path: 'login', component: LoginPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
