import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import AddUser from './AddUser';
import EditUser from './EditUser';

const UserList = () => {
  const [users, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-users/${id}`);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

 const openAddModal = () => navigate('/add');
  const openEditModal = (user) => {
    navigate(`/edit/${user.id}`);
    setSelectedUser(user); // Pastikan user dipilih

  };
  const closeModal = () => {
    navigate('/');
    getUser(); 
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <button onClick={openAddModal} className="button is-link mb-3">Add User</button>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
        
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <button onClick={() => openEditModal(user)} className="button is-small is-info">Edit</button>
                  <button onClick={() => deleteUser(user.id)} className="button is-small is-danger ml-3">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal untuk Add User */}
        {location.pathname === '/add' && (
          <Modal onClose={closeModal} title="Add User">
            <AddUser onSuccess={closeModal} />
          </Modal>
        )}

        {/* Modal untuk Edit User */}
        {location.pathname.startsWith('/edit/') && (
          <Modal onClose={closeModal} title="Edit User">
            <EditUser user={selectedUser} onSuccess={closeModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

const Modal = ({ onClose, children, title }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          {children}
        </section>
      </div>
    </div>
  );
};

export default UserList;