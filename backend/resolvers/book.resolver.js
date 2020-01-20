import { books } from '../data/book/book.service';

export default {
  Query: {
    books: () => books,
  },
};
