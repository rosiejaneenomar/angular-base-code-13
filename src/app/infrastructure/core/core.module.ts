import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppInitializerService } from './app-initializer.service';
import { HttpClientInterceptor } from './http-client-interceptor.service';


export function initializeApp1(appInitService: AppInitializerService) {
  return (): Promise<any> => { 
    return appInitService.Init();
  }
}

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [
    AppInitializerService,
    { provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [AppInitializerService], multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}
  ],
})
export class CoreModule { }
