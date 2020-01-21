import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Course } from '../models/course.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  @Input() courses: Course[];

}
