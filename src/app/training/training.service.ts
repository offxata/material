import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/Subject';

export class TrainingService {
  public exerciseChanged = new Subject<Exercise>();
  private availableExercise: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 22 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 120 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 50 }
  ];
  private runningExercise: Exercise;

  getAvailableExercise() {
    return this.availableExercise.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercise.find(ex => ex.id === selectedId);
    this.exerciseChanged.next({...this.runningExercise});
  }
}
