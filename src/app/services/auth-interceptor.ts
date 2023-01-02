import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthTokenService} from './auth-token.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private token: AuthTokenService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.token.authJwtToken) {

            const cloned = req.clone({
                headers: req.headers.set('Authorization', this.token.authJwtToken)
            });

            return next.handle(cloned);
        }
        else {

            next.handle(req);

        }
    }

}
