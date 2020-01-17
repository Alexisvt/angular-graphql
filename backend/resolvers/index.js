import { merge } from 'lodash';

import bookResolver from './book.resolver';
import courseResolver from './course.resolver';

export default merge(bookResolver, courseResolver)