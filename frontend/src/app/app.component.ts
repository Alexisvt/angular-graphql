import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, take } from 'rxjs/operators';

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
  courseSubRef: Subscription;
  private courseSubject = new BehaviorSubject<Course[]>([]);


  constructor(private readonly service: CourseService) { }

  ngOnInit(): void {
    this.courses$ = this.courseSubject.asObservable();

    this.service.getAllCourses('')
      .pipe(take(1))
      .subscribe(courses => {
        this.courseSubject.next(courses);
      });
  }

  ngAfterViewInit(): void {
    this.courseSubRef = fromEvent<any>(this.searchInput.nativeElement, 'keyup')
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
    this.courseSubRef.unsubscribe();
  }

}
