import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ExploreComponentComponent } from './explore-component/explore-component.component';
import { HomeComponent } from './home/home.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {path: "", component : HomeComponent},
  {path: "explore",component : ExploreComponentComponent},
  {path: "news", component : LatestNewsComponent},
  {path: "work", component : WorksComponent},
  {path: "contact", component : ContactUsComponent},
  //da wild card ashan law mafish haga men dol matnfztsh 
  {path: "**", component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
