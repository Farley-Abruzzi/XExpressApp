// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Observable } from 'rxjs'; // IMPORTANTE: IMPORT ATUALIZADO
// import { StorageService } from '../services/storage.service';
// import { API_CONFIG } from '../config/api.config';
// import { environment } from '../environments/environment.prod';

// const URL = environment.url;

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//     constructor(public storage: StorageService) {
//     }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//         let localUser = this.storage.getLocalUser();

//         let N = URL.length;
//         let requestToAPI = req.url.substring(0, N) == URL;

//         if (localUser && requestToAPI) {
//             const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)});
//             return next.handle(authReq);
//         }
//         else {
//             return next.handle(req);
//         }
//     }
// }

// export const AuthInterceptorProvider = {
//     provide: HTTP_INTERCEPTORS,
//     useClass: AuthInterceptor,
//     multi: true,
// };