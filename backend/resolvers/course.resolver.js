import courseModel from '../data/course/course.model';

export default {
  Query: {
    allCourses: (root, { searchTerm }) => {
      if (searchTerm) {
        return courseModel.find({ $text: { $search: searchTerm } }).sort({ voteCount: 'desc' });
      }

      return courseModel.find().sort({ voteCount: 'desc' });
    },
    course: (root, { id }) => courseModel.findOne({ id }),
  },
  Mutation: {
    upvote: (root, { id }) =>
      courseModel.findOneAndUpdate({ id }, { $inc: { voteCount: 1 } }, { new: true }),
    downvote: (root, { id }) =>
      courseModel.findOneAndUpdate({ id }, { $inc: { voteCount: -1 } }, { new: true }),
    addCourse: (root, { title, author, description, topic, url }) => {
      const course = new courseModel({ title, author, description, topic, url });
      return course.save();
    },
  },
};
