import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const [contacts, setContacts] = useState([]);

  const LOCAL_STORAGE_KEY = "contacts";
  const AddContactHandler = (contact) => {
    // console.log(contact);
    setContacts([...contacts, contact]);
  }

  useEffect(() => {
   const retrieveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   console.log("fetch", retrieveData);
   setContacts(retrieveData);
   console.log("cont", contacts);
  }, []);

  useEffect(() => {
    if(contacts.length !== 0)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    console.log("again", contacts);
  }, [contacts]);
  
  return (
    <div>
      <Header />
      <AddContact AddContactHandler={AddContactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
