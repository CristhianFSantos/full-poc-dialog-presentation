import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { EBreackPointScreen, ResizeModalService } from './modal-dialog/resize-modal.service';

@Component({
  selector: 'fm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'full-modal';
  numbers = [1,2,3,4,5,6,7,8,9]

  constructor(
    private readonly matDialog : MatDialog, 
    private readonly resizeModalService : ResizeModalService){

  }

  

  open(){
    this.matDialog.open(ModalDialogComponent,{
      ...(
        this.resizeModalService.getWidth() <= EBreackPointScreen.XS
        && this.resizeModalService.appendPropertiesFullMateralDialog
      ),
    })
  }
}
