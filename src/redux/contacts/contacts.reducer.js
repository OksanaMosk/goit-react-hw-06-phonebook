import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContacts(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// const initialState = {
//   contacts: JSON.parse(localStorage.getItem('contacts')) ?? [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };
// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContacts': {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case 'contacts/deleteContacts': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const deleteContacts = payload => {
//   return {
//     type: 'contacts/deleteContacts',
//     payload,
//   };
// };

// export const addContacts = payload => {
//   return {
//     type: 'contacts/addContacts',
//     payload,
//   };
// };
