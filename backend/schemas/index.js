import { gql } from 'apollo-server';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  type Course {
    id: String
    title: String
    author: String
    description: String
    topic: String
    url: String
    voteCount: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    allCourses(searchTerm: String): [Course]
    course(id: String!): Course
  }

  type Mutation {
    addCourse(ititle: String, author: String, description: String,   topic: String, url: String, voteCount: Int): Course
    upvote(id: String!): Course
    downvote(id: String!): Course
  }
`;