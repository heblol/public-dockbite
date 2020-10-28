import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SDKBrowserModule } from './sdk';
import { AddArticleComponent } from './components/add-article/add-article.component';
import {FormsModule} from "@angular/forms";
import { ReplyComponent } from './components/reply/reply.component';

@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    ReplyComponent
  ],
  imports: [
    BrowserModule,
    SDKBrowserModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
