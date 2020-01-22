import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../models/course.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {

  @Input() course: Course;
  @Output() increaseVote = new EventEmitter<string>();
  @Output() decreaseVote = new EventEmitter<string>();

  increase(courseId: string): void {
    this.increaseVote.emit(courseId);
  }

  decrease(courseId): void {
    this.decreaseVote.emit(courseId);
  }

}
