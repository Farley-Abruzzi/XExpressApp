import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Calendar } from '@ionic-native/calendar/ngx';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { DatePipe } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { AuthService } from './services/auth.services';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { UsuarioService } from './services/usuario.service';
import { AuthInterceptor } from '../interceptors/auth-interceptor';
import { ImageUtilService } from './services/image-util.service';






@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,
    Calendar,
    BluetoothSerial,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ErrorInterceptorProvider,
    AuthService,
    UsuarioService,
    ImageUtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
