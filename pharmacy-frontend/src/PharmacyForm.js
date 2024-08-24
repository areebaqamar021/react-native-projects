import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PharmacyForm = ({ pharmacyId, onSuccess }) => {
  const [pharmacy, setPharmacy] = useState({
    name: '',
    address: '',
    city: '',
    email: '',
    dateOfEstablishment: ''
  });

  useEffect(() => {
    if (pharmacyId) {
      axios.get(`http://localhost:3000/pharmacy/${pharmacyId}`)
        .then(response => setPharmacy(response.data))
        .catch(error => console.error(error));
    }
  }, [pharmacyId]);

  const handleChange = (e) => {
    setPharmacy({ ...pharmacy, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pharmacyId) {
      axios.put(`http://localhost:3000/pharmacy/${pharmacyId}`, pharmacy)
        .then(() => onSuccess())
        .catch(error => console.error(error));
    } else {
      axios.post('http://localhost:3000/pharmacy', pharmacy)
        .then(() => onSuccess())
        .catch(error => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={pharmacy.name} onChange={handleChange} placeholder="Name" required />
      <input name="address" value={pharmacy.address} onChange={handleChange} placeholder="Address" required />
      <input name="city" value={pharmacy.city} onChange={handleChange} placeholder="City" required />
      <input name="email" type="email" value={pharmacy.email} onChange={handleChange} placeholder="Email" required />
      <input name="dateOfEstablishment" type="date" value={pharmacy.dateOfEstablishment} onChange={handleChange} required />
      <button type="submit">Save</button>
    </form>
  );
};

export default PharmacyForm;
