import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StringMatcherComponent } from './string-matcher/string-matcher.component';


const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
