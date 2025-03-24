import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUser = ({ user, onSuccess }) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [gender, setGender] = useState(user ? user.gender : 'Male');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setGender(user.gender);
    }
  }, [user]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/update-users/${user.id}`, {
        name,
        email,
        gender,
      });
      onSuccess(true); 
    } catch (error) {
      console.log(error);
      onSuccess(false); 
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
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
              <div className="select is-fullwidth">
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">Update</button>
            <button type="button" className="button is-success ml-3" onClick={() => onSuccess(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;