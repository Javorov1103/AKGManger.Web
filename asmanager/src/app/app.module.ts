import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { routing } from './app.routes';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { ErrorInterceptorService } from './shared/services/error-interceptor.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    HttpClient,
    AuthService, 
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
