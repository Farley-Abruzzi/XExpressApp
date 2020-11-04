import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import { catchError } from 'rxjs/operators';
import { StorageService } from '../app/services/storage.service';
import { ToastController } from '@ionic/angular';
 
 
@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    
    constructor(public storage: StorageService, private toastCtrl: ToastController) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req)
            .pipe(
                catchError(error => {
                    let errorObj = error;
                    if(errorObj.error){
                        errorObj = errorObj.error;
                    }
                    if (!errorObj.status) {
                        errorObj = JSON.parse(errorObj);
                        
                    }
                    console.log("Erro detectado pelo Inteceptor:");
                    console.log(errorObj);

                    switch (errorObj.status) {
                        case 401:
                            this.handle401();
                            break;
                        case 403:
                            this.handle403();
                            break;
                        default:
                            this.handleDefaultError(errorObj);
                    }
                    
                    return throwError(errorObj);
                })) as any;
    }

    handle401() {
        this.presentToast('Login ou senha inválidos');
    }
    
    handle403() {
        this.presentToast('Acesso negado');
        this.storage.setLocalUser(null);
    }

    async handleDefaultError(errorObj) {
        const toast = await this.toastCtrl.create({
            message: 'Erro ' + errorObj.status + ': ' + errorObj.error,
            duration: 2000,
            mode: "ios"
          });
        toast.present();
        //this.storage.setLocalUser(null);
    }

    async presentToast( message: string ) {
        const toast = await this.toastCtrl.create({
          message,
          duration: 2000,
          mode: "ios"
        });
        toast.present();
      }
  
} 
 
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};