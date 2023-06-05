import React, { useState } from 'react';
import './App.css';
import contactsData from './contacts.json';
import ContactTable from './components/ContactTable';
import SortButton from './components/SortButton';
import AddContactButton from './components/AddContactButton';

function App() {
  const initialContacts = contactsData.slice(0, 5);
  const [contactList, setContactList] = useState(initialContacts);

  const sortByName = () => {
    const sortedContacts = [...contactList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContactList(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contactList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContactList(sortedContacts);
  };

  const addRandomContact = () => {
    const remainingContacts = contactsData.slice(5); // Get the remaining contacts

    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

      setContactList(prevContacts => [...prevContacts, randomContact]);
    }
  };

  const deleteContact = id => {
    const updatedContacts = contactList.filter(contact => contact.id !== id);
    setContactList(updatedContacts);
  };

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <div>
        <SortButton text="Sort by Name" onClick={sortByName} />
        <SortButton text="Sort by Popularity" onClick={sortByPopularity} />
        <AddContactButton onClick={addRandomContact} />
      </div>
      <ContactTable contacts={contactList} onDelete={deleteContact} />
    </div>
  );
}

export default App;
