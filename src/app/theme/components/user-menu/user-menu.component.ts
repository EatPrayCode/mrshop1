import { SigninComponent } from './../../../core/auth/components/signin/signin.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { packsDataSampleDoctor } from 'src/app/mock-data/constants';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  constructor(
    public appService: AppService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
  }

  openLoginDialog(): void {
    let dialogRef = this.dialog.open(SigninComponent, {
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
