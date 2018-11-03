import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Hello1Component } from './hello1/hello1.component';
import { PersonComponent } from './person/person.component';
import { PropertyComponent } from './property/property.component';
import { AttributeComponent } from './attribute/attribute.component';
import { MouseComponent } from './mouse/mouse.component';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app1/app2.component';



import { AppComponent } from './app.component';
import { EmployeeListComponent} from '../app/employee-list-component/employee-list-component.component';

//import { EmployeeListComponent} from './employee-list-component/employee-list-component.component';


@NgModule({
  declarations: [
    Hello1Component,
    PersonComponent,
    PropertyComponent,
    AttributeComponent,
    MouseComponent,
    App1Component,
    App2Component,
    AppComponent,
    EmployeeListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
