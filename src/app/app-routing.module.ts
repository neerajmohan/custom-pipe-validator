import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { ResponseComponent } from './response/response.component';


const routes: Routes = [
  {"path":"",component:ApplyComponent},
  {"path":"response",component:ResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
