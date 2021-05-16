import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/desktop/home/home.component';
import { TrendingComponent } from './components/desktop/trending/trending.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'trending', component: TrendingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
