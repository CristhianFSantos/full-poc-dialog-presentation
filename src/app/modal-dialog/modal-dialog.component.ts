import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fm-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {

  constructor(private matDialogRef : MatDialogRef<ModalDialogComponent>) { }

  ngOnInit(): void {
  }


  close(){
    this.matDialogRef.close()
  }
}
