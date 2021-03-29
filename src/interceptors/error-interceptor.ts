import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import { catchError } from 'rxjs/operators';
import { StorageService } from '../app/services/storage.service';
import { AlertController, ToastController } from '@ionic/angular';
import { FieldMessage } from '../app/interfaces/fieldmessage';
 
 
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    
    constructor(public storage: StorageService, private toastCtrl: ToastController, public alertCtrl: AlertController) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req).pipe(catchError(error => {
            
                    let errorObj = error;
                    if(errorObj.error){
                        errorObj = errorObj.error;
                    }
                    if (!errorObj.status) {
                        errorObj = JSON.parse(errorObj);  
                    }
                    console.log("Erro detectado pelo Inteceptor: ");
                    console.log(errorObj);

                    switch (errorObj.status) {
                        case 401:
                            this.handle401();
                            break;
                        case 403:
                            this.handle403();
                            break;
                        case 422:
                            this.handle422(errorObj);
                            break;
                        default:
                            this.handleDefaultError(errorObj);
                    }
                    
                    return throwError(errorObj);
                })) as any;
    }

    async handle401() {
        const alert = await this.alertCtrl.create({
            header: 'Erro 401: falha de autenticação',
            message: 'Email ou senha incorretos',
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        await alert.present();
    }
    
    handle403() {
        this.presentToast('Acesso negado');
        this.storage.setLocalUser(null);
    }

    async handle422(errorObj) {
        const alert = await this.alertCtrl.create({
            header: 'Erro 422: Validacao',
            message: this.listErrors(errorObj.errors),
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        await alert.present();
    }

    async handleDefaultError(errorObj) {
        const alert = await this.alertCtrl.create({
            header: 'Erro ' + errorObj.status + ': ' + errorObj.error,
            message: errorObj.message,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        await alert.present();
    }

    async presentToast( message: string ) {
        const toast = await this.toastCtrl.create({
          message,
          duration: 2000,
          mode: "ios"
        });
        toast.present();
    }
    
    private listErrors(messages : FieldMessage[]) : string {
        let s : string = '';
        for (var i=0; i<messages.length; i++) {
            s = s + '<p><strong>' + messages[i].fieldName + "</strong>: " + messages[i].message + '</p>';
        }
        return s;
    }
  
} 
 
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};