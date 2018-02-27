import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() newTrainingStart = new EventEmitter<void>();
  trainings;

  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    this.trainings = this.trainingService.getAvailableExercise();
  }

  onStartTraining() {
    this.newTrainingStart.emit();
  }

}
