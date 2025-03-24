import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/create-users', {
        name,
        email,
        gender,
      });
      onSuccess(true); // Data berhasil ditambahkan
    } catch (error) {
      console.log(error);
      onSuccess(false); // Gagal menambahkan data
    }
  };

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label className="radio ml-5">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">Save</button>
            <button type="button" className="button is-success ml-3" onClick={() => onSuccess(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;