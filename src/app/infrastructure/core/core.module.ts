import { HttpClientInterceptor } from './http-client-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { AppInitializerService } from './app-initializer.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [
    AppInitializerService,
    HttpClientInterceptor,
    { provide: APP_INITIALIZER, useClass: AppInitializerService },
    { provide: HttpClientModule, useClass: HttpClientInterceptor}
  ],
})
export class CoreModule { }
