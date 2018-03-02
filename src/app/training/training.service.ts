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
  private exercise: Exercise[] = [];




  getAvailableExercise() {
    return this.availableExercise.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercise.find(ex => ex.id === selectedId);
    this.exerciseChanged.next({...this.runningExercise});
  }

  getRunningExercise() {
    return {...this.runningExercise };
  }


  complatedExercise() {
    this.exercise.push({
        ...this.runningExercise,
        date: new Date(),
        state: 'completed',
      });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.exercise.push({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.duration * (progress / 100),
      date: new Date(),
      state: 'cancalled',
    });
    console.log(this.runningExercise);
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }


}
