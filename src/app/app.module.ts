import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule,  } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';

import { AddtaskService } from './addtask/addtask.service';
import { ViewtaskService } from './viewtask/viewtask.service';
import { UpdatetaskService } from './updatetask/updatetask.service';
import { AdduserService } from './adduser/adduser.service';
import { UpdateuserService } from './updateuser/updateuser.service';
import { AddprojectService } from './addproject/addproject.service';
import { UpdateprojectService } from './updateproject/updateproject.service';

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    ViewtaskComponent,
    UpdatetaskComponent,
    AdduserComponent,
    AddprojectComponent,
    UpdateuserComponent,
    UpdateprojectComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AddtaskService,
    ViewtaskService,
    UpdatetaskService,
    AdduserService,
    UpdateuserService,
    AddprojectService,
    UpdateprojectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
