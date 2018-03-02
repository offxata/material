import { Component, OnInit } from '@angular/core';
// service
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit {

  private dataSource: Exercise[] = [];

  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    this.dataSource = this.trainingService.getAvailableExercise();
  }

}
