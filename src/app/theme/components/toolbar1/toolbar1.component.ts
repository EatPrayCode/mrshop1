import { ChooseAppSettingsModalComponent } from './../../../core/auth/components/choose-app-settings-modal/choose-app-settings-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { packsDataSampleDoctor } from 'src/app/mock-data/constants';

@Component({
  selector: 'app-toolbar1',
  templateUrl: './toolbar1.component.html'
})
export class Toolbar1Component implements OnInit {
  @Output() onMenuIconClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public appService: AppService,
    public dialog: MatDialog
  ) { }

  ngOnInit() { }

  public sidenavToggle() {
    this.onMenuIconClick.emit();
  }

  openSettingsDialog(): void {
    let dialogRef = this.dialog.open(ChooseAppSettingsModalComponent, {
      hasBackdrop: true,
      disableClose: false,
      height: '100vh',
      minWidth: '90%',
      position: {
        right: '0px',
        bottom: '0px',
      },
      data: {
        pack: packsDataSampleDoctor[0]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}