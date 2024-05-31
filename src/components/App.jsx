import React from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';  // Importa el formulario de contacto
import Filter from './Filter';  // Importa el filtro
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter /> 
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default App;
