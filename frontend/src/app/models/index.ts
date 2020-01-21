import gql from 'graphql-tag';

import { Course } from './course.model';

export interface QueryCourse {
  allCourses: Course[];
}

export const courseFragment = gql`
fragment courseFragment on Course {
  id
  title
  author
  description
  topic
  url
  voteCount
}
`;
