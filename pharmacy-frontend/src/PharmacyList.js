import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PharmacyForm from './PharmacyForm';

const PharmacyList = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/pharmacy')
      .then(response => setPharmacies(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleEdit = (pharmacy) => {
    setSelectedPharmacy(pharmacy._id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/pharmacy/${id}`)
      .then(() => setPharmacies(pharmacies.filter(ph => ph._id !== id)))
      .catch(error => console.error(error));
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    axios.get('http://localhost:3000/pharmacy')
      .then(response => setPharmacies(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      {showForm && <PharmacyForm pharmacyId={selectedPharmacy} onSuccess={handleFormSuccess} />}
      <ul>
        {pharmacies.map(pharmacy => (
          <li key={pharmacy._id}>
            {pharmacy.name} - {pharmacy.email}
            <button onClick={() => handleEdit(pharmacy)}>Edit</button>
            <button onClick={() => handleDelete(pharmacy._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setShowForm(true)}>Add Pharmacy</button>
    </div>
  );
};

export default PharmacyList;
