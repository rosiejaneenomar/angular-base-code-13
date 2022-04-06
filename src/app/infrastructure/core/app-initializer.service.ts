import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppInitializerService {
  constructor() { }

  Init() {
    return new Promise<void>((resolve, reject) => {
      console.log("AppInitializerService.init() called");
      ////do your initialisation stuff here  
      setTimeout(() => {
          console.log('AppInitService Finished');
          resolve();
      }, 6000);

  });
  }
}