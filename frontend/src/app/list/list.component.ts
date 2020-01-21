import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { CourseService } from '../course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnChanges {

  @Input() searchTerm: string;
  courses$: Observable<Course[]>;

  constructor(private readonly service: CourseService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.courses$ = this.service.getAllCourses(this.searchTerm)
      ;
  }

}
