import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeModalService {

  constructor() { }


  // atributo que será incluido quando a screen for pequena
  appendPropertiesFullMateralDialog = {
    maxWidth: '100vw',
    maxHeight: '100vh',

    height: '100%',
    width: '100%',

    panelClass: 'full-screen-modal'
  }
  

  // métodos que retornam o tamanho da tela no momento
  getWidth(): number{
    return window.screen.width
  }

  getHeight(): number{
    return window.screen.height
  }
}

export enum EBreackPointScreen {
  XS = 599,
  SM = 959,
  MD = 1279,
  LG = 1919,
}