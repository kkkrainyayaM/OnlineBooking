import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {EntryComponent} from '../entry/entry.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog) {}

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EntryComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
