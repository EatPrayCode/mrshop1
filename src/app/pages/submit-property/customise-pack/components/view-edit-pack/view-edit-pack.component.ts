import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-edit-pack',
  templateUrl: './view-edit-pack.component.html',
  styleUrls: ['./view-edit-pack.component.scss']
})
export class ViewEditPackComponent implements OnInit {

  inputData: any = {};

  ngOnInit(): void { }

  constructor(
    public dialogRef: MatDialogRef<ViewEditPackComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

    this.inputData = data.pack.packsData;
  }

  doAction() { }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
