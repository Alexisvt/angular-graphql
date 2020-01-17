import { coursesData } from '../data/course.service';

export default {
  Query: {
    allCourses: (root, { searchTerm }) => coursesData,
    course: (root, { id }) => coursesData.find((course) => course.id === id),
  },
  Mutation: {
    upvote: (root, { id }) => {
      const course = coursesData.find(course => course.id === id);
      course.voteCount++;
      return course;
    },
    downvote: (root, { id }) => {
      const course = coursesData.find(course => course.id === id);
      course.voteCount--;
      return course;
    },
    addCourse: (root, { title, author, description, topic, url }) => { }
  }
}