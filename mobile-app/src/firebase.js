import React, { useState } from 'react';
import { db } from '../firebase'; // 👈 Make sure path is correct
import { collection, addDoc } from 'firebase/firestore';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'registrations'), {
        name,
        email,
        createdAt: new Date()
      });

      alert('✅ Registration successful!');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('❌ Error saving to Firestore:', error);
      alert('Something went wrong. Check the console.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
