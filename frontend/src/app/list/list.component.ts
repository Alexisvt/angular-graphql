import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../models/course.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  @Input() courses: Course[];
  @Output() increaseVote = new EventEmitter<string>();
  @Output() decreaseVote = new EventEmitter<string>();

  increase(courseId: string): void {
    this.increaseVote.emit(courseId);
  }

  decrease(courseId): void {
    this.decreaseVote.emit(courseId);
  }

}
