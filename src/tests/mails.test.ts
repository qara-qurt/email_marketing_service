import { configureStore } from '@reduxjs/toolkit';
import mailReducer, { saveMail, IMail } from '../store/mailSlice';

interface State {
  mail: {
    mails: IMail[];
  };
}

describe('mail reducer', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({ reducer: { mail: mailReducer } });
  });

  it('should handle initial state', () => {
    const { mail } = store.getState() as State;
    expect(mail.mails).toEqual([]);
  });

  it('should handle saveMail', () => {
    const mockMail: IMail = {
      name: 'Test',
      mail: {
        name:'TEST',
        emails:[
          "test@gmail.com",
          "test@gmail.com",
          "test@gmail.com",
        ]
      },
      template: {
        id:0,
        html:"TEST HTML",
        design:{},
        chunks:{},
        amp:{}
      }
    };

    store.dispatch(saveMail(mockMail));
    const { mail } = store.getState() as State;
    expect(mail.mails).toEqual([mockMail]);
  });
});
