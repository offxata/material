import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress: number = 0;
  timer: any;
  @Output() trainingExit = new EventEmitter();

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.startTrainingTimer();
  }

  startTrainingTimer() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress === 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {data: {
      progress: this.progress
    }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainingExit.emit();
      } else {
        this.startTrainingTimer();
      }
    });
  }

}
