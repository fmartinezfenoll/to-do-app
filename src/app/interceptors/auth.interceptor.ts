import { Injectable } from '@angular/core';
import { HttpRequest,
 HttpHandler,
 HttpEvent,
 HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 constructor(public userService: UserService) {}
 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 const token = this.userService.getToken();
 var request = req;
 //Validamos si el token existe
 if (token) {
 //Clonamos el token y lo inyectamos en la cabecera de todas las peticiones HTTP
 request = req.clone({
 setHeaders: {
 authorization: `Bearer ${token}`
 }
 });
 }
 return next.handle(request);
 }
} 