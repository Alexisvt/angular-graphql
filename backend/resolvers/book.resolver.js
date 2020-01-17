import { books } from '../data/book.service';

export default {
  Query: {
    books: () => books
  }
}