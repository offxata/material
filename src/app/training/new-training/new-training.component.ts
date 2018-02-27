import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  trainings: Exercise[] = [];
  newTrainingForm: FormGroup;

  constructor(
    private trainingService: TrainingService,
    private fb: FormBuilder
  ) {
    this.createNewTrainingForm();
  }

  ngOnInit() {
    this.trainings = this.trainingService.getAvailableExercise();
  }

  createNewTrainingForm() {
    this.newTrainingForm = this.fb.group({
      trainingList: [[], Validators.required ]
    });
  }

  onStartTraining() {
    const trainingType = this.newTrainingForm.value.trainingList;
    this.trainingService.startExercise(trainingType);
  }

}
