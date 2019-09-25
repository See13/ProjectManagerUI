import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'addproject'
  },
  {
    path: 'addproject',
    component: AddprojectComponent
  },
  {
    path: 'adduser',
    component: AdduserComponent
  },
  {
    path: 'addtask',
    component: AddtaskComponent
  },
  {
    path: 'updateproject/:id',
    component: UpdateprojectComponent
  },
  {
    path: 'updateuser/:id',
    component: UpdateuserComponent
  },
  {
    path: 'updatetask/:id',
    component: UpdatetaskComponent
  },
  {
    path: 'viewtask',
    component: ViewtaskComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
