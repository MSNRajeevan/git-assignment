import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmpTagComponent } from './emp-tag/emp-tag.component';
import { EmpEntryComponent } from './emp-entry/emp-entry.component';
import { EmpShowComponent } from './emp-show/emp-show.component';
import { EmpBaseComponent } from './emp-base/emp-base.component';
import { EmpEntrychildComponent } from './emp-entrychild/emp-entrychild.component';
import { EmpShowchildComponent } from './emp-showchild/emp-showchild.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpTagComponent,
    EmpEntryComponent,
    EmpShowComponent,
    EmpBaseComponent,
    EmpEntrychildComponent,
    EmpShowchildComponent
  ],
  imports: [
    BrowserModule
  
  ],
  providers: [], //dependancy inj
  bootstrap: [AppComponent]
})
export class AppModule { }
