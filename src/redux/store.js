import { contactsReducer } from './contacts/contacts.reducer';

import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    contactsStore: contactsReducer,
  },
});
