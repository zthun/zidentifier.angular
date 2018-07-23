import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ZIdentifierModule } from '../../projects/zidentifier/src/public_api';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ZIdentifierModule
  ],
  providers: []
})
export class AppModule { }
