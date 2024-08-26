import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LoadComponent } from './load/load.component';  
import { HttpClientModule } from '@angular/common/http';
import { XmlDownloadComponent } from './xml-download/xml-download.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConfirmDialogComponent,
    FileUploadComponent,
    LoadComponent,
    XmlDownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  // Ajouter FormsModule ici

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
