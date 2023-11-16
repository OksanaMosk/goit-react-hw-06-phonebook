import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { nanoid } from 'nanoid';
import { addContacts, deleteContacts } from 'redux/contacts/contacts.reducer';

import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filters } from 'redux/filter/filter.reducer';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.filterStore.filter);
  // console.log('filter: ', filter);

  const handleAddContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name}  is already in contacts`);
      return;
    }
    const finalContacts = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContacts(finalContacts));
  };

  const removeContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const changeFilter = event => {
    dispatch(filters(event.target.value));
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visContacts = visibleContacts();

  return (
    <div className={css.container}>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
      </div>
      <div>
        <h2 className={css.titleContacts}>Contacts</h2>
        {contacts.length > 0 ? (
          <Filter onChangeFilter={changeFilter} />
        ) : (
          <p className={css.noContacts}>
            &#128064;Add your first contact! Your phonebook is empty.&#128064;
          </p>
        )}
        {contacts.length > 0 && (
          <ContactList contacts={visContacts} onRemoveContact={removeContact} />
        )}
      </div>
    </div>
  );
};
