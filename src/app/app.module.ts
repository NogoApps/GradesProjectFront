import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageIndexComponent,
    DialogLoginComponent,
    DropdownMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }