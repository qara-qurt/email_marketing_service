import { configureStore } from '@reduxjs/toolkit';
import bookReducer, { saveBook, IBook } from '../store/bookSlice';

// Define the type of your state
interface State {
  book: {
    books: IBook[];
  };
}

describe('book reducer', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({ reducer: { book: bookReducer } });
  });

  it('should handle initial state', () => {
    const { book } = (store.getState() as State);
    expect(book.books).toEqual([]);
  });

  it('should handle saveBook', () => {
    const mockBook: IBook = {
      name: 'Test',
      emails: ['test@example.com']
    };

    store.dispatch(saveBook(mockBook));
    const { book } = (store.getState() as State);
    expect(book.books).toEqual([mockBook]);
  });
});
