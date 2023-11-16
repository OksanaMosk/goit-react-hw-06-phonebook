import { contactsReducer } from './contacts/contacts.reducer';
import { filterReducer } from './filter/filter.reducer';

import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    contactsStore: contactsReducer,
    filterStore: filterReducer,
  },
});
