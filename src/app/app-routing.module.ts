import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllTestsComponent} from './all-tests/all-tests.component';
import {AllActivationsComponent} from './all-activations/all-activations.component';
import {AllRespondersComponent} from './all-responders/all-responders.component';

const routes: Routes = [
    {path: 'all-tests', component: AllTestsComponent},
    {path: 'all-activations', component: AllActivationsComponent},
    {path: 'all-responders', component: AllRespondersComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
