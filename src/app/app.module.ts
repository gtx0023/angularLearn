import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello/hello.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {B2cCommunicateComponent} from './b2c-communicate/b2c-communicate.component';

import {ListService} from '@/service/list.service';
import {LogService} from '@/service/log.service';
import {RoutingModule} from "@app/routing/routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    B2cCommunicateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RoutingModule
  ],
  providers: [ListService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
