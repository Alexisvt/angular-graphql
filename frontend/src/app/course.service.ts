import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { courseFragment, QueryCourse } from './models';
import { Course } from './models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private apollo: Apollo) { }

  getAllCourses(searchTerm: string): Observable<Course[]> {
    return this.apollo.query<QueryCourse>({
      query: gql`
      query allCourses($searchTerm: String) {
        allCourses(searchTerm: $searchTerm) {
          ...courseFragment
        }
      }

      ${courseFragment}
      `,
      variables: {
        searchTerm
      }
    })
      .pipe(
        map(result => result.data.allCourses)
      );
  }

  upVote(id: string): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
      mutation upvote($id: String!) {
        upvote(id: $id) {
          id
          title
          voteCount
        }
      }
      `,
      variables: {
        id
      }
    })
      .pipe(
        map(result => result.data)
      );
  }

  downVote(id: string): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
      mutation downVote($id: String!) {
        downVote(id: $id) {
          id
          title
          author
          description
          topic
          url
          voteCount
        }
      }
      `,
      variables: {
        id
      }
    })
      .pipe(
        map(result => result.data)
      );
  }
}
