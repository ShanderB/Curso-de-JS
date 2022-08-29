import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { EventEmitterComponent } from './components/event-emitter/event-emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListaRenderComponent } from './components/lista-render/lista-render.component';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    EventEmitterComponent,
    ChangeNumberComponent,
    ListaRenderComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
