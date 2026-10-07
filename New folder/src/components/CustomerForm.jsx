import { useState } from 'react';

export default function CustomerForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [success, setSuccess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim().length <= 3) {
      setNameError('Your name is not available.');
      setError('');
      setSuccess('');
      return;
    }

    if (phone.trim().length < 10) {
      setPhoneError('Your phone number is not available.');
      setError('');
      setSuccess('');
      return;
    }

    if (Number(age) <= 18) {
      setError('Age must be more than 18.');
      setSuccess('');
      return;
    }

    const validEmail = /\S+@\S+\.\S+/.test(email);

    if (!validEmail) {
      setError('Please enter a valid email.');
      setSuccess('');
      return;
    }

    setNameError('');
    setPhoneError('');
    setError('');
    setSuccess('Customer information submitted.');
  }

  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);
    if (value.trim().length <= 3) {
      setNameError('Your name is not available.');
    } else {
      setNameError('');
    }
  }

  function handlePhoneChange(event) {
    const value = event.target.value;
    setPhone(value);
    if (value.trim().length < 10) {
      setPhoneError('Your phone number is not available.');
    } else {
      setPhoneError('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl bg-white p-6 shadow-md">
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          className="mt-1 w-full rounded-lg border p-2"
        />
        {nameError && <p className="mt-1 text-red-600">{nameError}</p>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
        
          id="lastName"
          type="text"
          placeholder="optional"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          className="mt-1 w-full rounded-lg border p-2"
        />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          className="mt-1 w-full rounded-lg border p-2"
        />
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="number"
          value={phone}
          onChange={handlePhoneChange}
          className="mt-1 w-full rounded-lg border p-2"
        />
        {phoneError && <p className="mt-1 text-red-600">{phoneError}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-1 w-full rounded-lg border p-2"
        />
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-1 w-full rounded-lg border p-2"
        />
      </div>

      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-700">{success}</p>}

      <button type="submit" className="rounded-lg bg-blue-700 px-4 py-2 text-white">
        Submit
      </button>
    </form>
  );
}
