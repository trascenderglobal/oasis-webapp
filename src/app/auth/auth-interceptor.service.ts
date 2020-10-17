import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private ngxSpinnerService: NgxSpinnerService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ngxSpinnerService.show();
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.ngxSpinnerService.hide();
      }
      return event;
    }, (error) => {
      this.ngxSpinnerService.hide();

      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          this.router.navigate(['/']);
        }
      }
    }));
  }

}
