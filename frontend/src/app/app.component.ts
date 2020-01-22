import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, fromEvent, noop, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import { CourseService } from './course.service';
import { Course } from './models/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('search', { static: false }) searchInput: ElementRef;
  searchTerm$: Observable<string>;
  courses$: Observable<Course[]>;
  eventSubRef: Subscription;
  getAllCoursesSubRef: Subscription;
  private courseSubject = new BehaviorSubject<Course[]>([]);


  constructor(private readonly service: CourseService) { }

  ngOnInit(): void {
    this.courses$ = this.courseSubject.asObservable();

    this.getAllCoursesSubRef = this.service.getAllCourses('')
      .subscribe(courses => {
        this.courseSubject.next(courses);
      });
  }

  ngAfterViewInit(): void {
    this.eventSubRef = fromEvent<any>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(searchTerm => this.service.getAllCourses(searchTerm))
      )
      .subscribe(courses => {
        this.courseSubject.next(courses);
      });
  }

  ngOnDestroy(): void {
    this.eventSubRef.unsubscribe();
    this.getAllCoursesSubRef.unsubscribe();
  }


  increase(courseId: string): void {
    this.service.upVote(courseId).subscribe(noop);
  }

  decrease(courseId): void {
    this.service.downVote(courseId).subscribe(noop);
  }

}
