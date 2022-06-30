import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ReplaySessionService } from '../replay-session.service';

@Injectable({providedIn: 'root'})
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(
    private replaySessionService: ReplaySessionService,
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const handleResponse = (request: HttpRequest<any>, response: HttpResponse<any>, event: string) => {
      this.replaySessionService.sendEventToReplaySession(event, { request, response })
    }
    return next.handle(request).pipe(
      
      filter( (event: any) => event instanceof HttpResponse),
      map( (resp: HttpResponse<any>) => {
        handleResponse(request, resp, `${request.url}`)
        return resp
      }),
      map((event: HttpEvent<any>) => {
        return event;
      })
    );
  }
}