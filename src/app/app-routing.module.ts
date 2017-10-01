import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllTestsComponent} from './pages/all-tests/all-tests.component';
import {AllActivationsComponent} from './pages/all-activations/all-activations.component';
import {AllRespondersComponent} from './pages/all-responders/all-responders.component';
import {CreateNewTestComponent} from './pages/create-new-test/create-new-test.component';

const routes: Routes = [
    {path: 'all-tests', component: AllTestsComponent},
    {path: 'all-activations', component: AllActivationsComponent},
    {path: 'all-responders', component: AllRespondersComponent},
    {path: 'create-new-test', component: CreateNewTestComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
