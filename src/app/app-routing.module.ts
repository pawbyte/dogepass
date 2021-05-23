import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: 'search/:term', component: SearchComponent }
    ]
  },
  { path: 'login', component: LoginComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
