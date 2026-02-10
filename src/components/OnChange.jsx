import React, { useState } from 'react';

const OnChange = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [gender, setGender] = useState('');

  return (
    <div>
      <h2>OnChange Demo</h2>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Phone: </label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label>Address: </label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label>City: </label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <div>
        <label>Country: </label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
      </div>
      <div>
        <label>Zipcode: </label>
        <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
      </div>
      <div>
        <label>Gender: </label>
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
      </div>
      <h3>Current Values:</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
      <p>City: {city}</p>
      <p>Country: {country}</p>
      <p>Zipcode: {zipcode}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default OnChange;
