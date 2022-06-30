import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
} from '@angular/common/http';
import OpenReplay from '@openreplay/tracker'


type ReqRespType = {
  request: HttpRequest<any>,
  response: HttpResponse<any>
}

@Injectable({
  providedIn: 'root'
})
export class ReplaySessionService {
  tracker: OpenReplay|null = null

  constructor() {
    console.log("service instantiated!")
    this.tracker = new OpenReplay({
        projectKey: "<your project key>",
      __DISABLE_SECURE_MODE: true
    })

    this.tracker.start()
   }

  sendEventToReplaySession(event: string, params: ReqRespType): void {
    const {request, response} = params
    console.log(request)
    console.log(response)
    console.log("sending data to session replay!")
    this.tracker?.event(event + "[request]", {
      method: request.method,
      url: request.url,
      params: request.params
    })
    this.tracker?.event(event + "[response]", {
      body: response.body,
      status: response.status,
      headers: response.headers
    })
  }
}
