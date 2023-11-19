import { configureStore } from '@reduxjs/toolkit';
import templateReducer, { saveTemplate } from '../store/templateSlice';

// Define the type of your state
interface State {
  template: {
    templates: any[];
  };
}

describe('template reducer', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({ reducer: { template: templateReducer } });
  });

  it('should handle initial state', () => {
    const { template } = (store.getState() as State);  // Cast the state to the State type
    expect(template.templates).toEqual([]);
  });

  it('should handle saveTemplate', () => {
    const mockTemplate = { /* mock template object */ };

    store.dispatch(saveTemplate(mockTemplate));
    const { template } = (store.getState() as State);
    expect(template.templates).toEqual([mockTemplate]);
  });
});
