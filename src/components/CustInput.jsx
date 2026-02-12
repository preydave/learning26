import React, { useState } from 'react';

const countryStateData = [
  {
    country: "India",
    states: ["Gujarat", "Maharashtra", "Rajasthan", "Punjab"]
  },
  {
    country: "USA",
    states: ["California", "Texas", "Florida", "New York"]
  },
  {
    country: "Canada",
    states: ["Ontario", "Quebec", "Alberta", "British Columbia"]
  }
];

const CustInput = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [gender, setGender] = useState('');

  // 🔥 Dependent Dropdown States
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [availableStates, setAvailableStates] = useState([]);

  const [submittedData, setSubmittedData] = useState(null);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);

    const foundCountry = countryStateData.find(
      (item) => item.country === selectedCountry
    );

    setAvailableStates(foundCountry ? foundCountry.states : []);
    setState(""); // reset state when country changes
  };

  const handleSubmit = () => {
    setSubmittedData({
      name,
      age,
      email,
      password,
      phone,
      address,
      city,
      country,
      state,
      zipcode,
      gender
    });
  };

  return (
    <div style={{ display: "flex", gap: "60px" }}>

      {/* LEFT SIDE */}
      <div>
        <h2>OnChange Demo</h2>

        <div><label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div><label>Age: </label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <div><label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div><label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div><label>Phone: </label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div><label>Address: </label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        <div><label>City: </label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>

        {/* 🔥 Country Dropdown */}
        <div>
          <label>Country: </label>
          <select value={country} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {countryStateData.map((item, index) => (
              <option key={index} value={item.country}>
                {item.country}
              </option>
            ))}
          </select>
        </div>

        {/* 🔥 State Dropdown */}
        <div>
          <label>State: </label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            disabled={!country}
          >
            <option value="">Select State</option>
            {availableStates.map((st, index) => (
              <option key={index} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        <div><label>Zipcode: </label>
          <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
        </div>

        <div><label>Gender: </label>
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </div>

        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <h3>Submitted Data:</h3>

        {submittedData && (
          <div>
            <p>Name: {submittedData.name}</p>
            <p>Age: {submittedData.age}</p>
            <p>Email: {submittedData.email}</p>
            <p>Password: {submittedData.password}</p>
            <p>Phone: {submittedData.phone}</p>
            <p>Address: {submittedData.address}</p>
            <p>City: {submittedData.city}</p>
            <p>Country: {submittedData.country}</p>
            <p>State: {submittedData.state}</p>
            <p>Zipcode: {submittedData.zipcode}</p>
            <p>Gender: {submittedData.gender}</p>
          </div>
        )}

      </div>

    </div>
  );
};

export default CustInput;
