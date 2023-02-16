import React from 'react';
import FullName from './components/FullName';
import ProfilePhoto from './components/ProfilePhoto';
import Address from './components/Address';
import './App.css';

function App() {
  return (
    <div>
      <FullName firstName="John" lastName="Doe" />
      <ProfilePhoto src="https://example.com/profile-photo.jpg" alt="Profile Photo" />
      <Address street="123 Main St" city="Anytown" state="CA" zip="12345" />
    </div>
  );
}

export default App;



