import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { profileUpdateRequest } from '../../../actions/profileActions'; // Assurez-vous que le chemin d'importation est correct
import './ProfileForm.css';

function ProfileForm() {
  const { firstName, lastName } = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  // Les états pour gérer les champs modifiables
  const [editFirstName, setEditFirstName] = useState(firstName);
  const [editLastName, setEditLastName] = useState(lastName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditFirstName(firstName);
    setEditLastName(lastName);
  };

  const handleSave = () => {
    // Assurez-vous que les paramètres passés correspondent à ce que votre action attend
    dispatch(profileUpdateRequest({ firstName: editFirstName, lastName: editLastName }));
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back</h1>
        {!isEditing ? (
          <div className="profile-display">
            <span>{firstName}</span>
            <span>{lastName}</span>
            <button onClick={handleEdit}>Edit Name</button>
          </div>
        ) : (
          <div className="profile-edit">
            <input type="text" value={editFirstName} onChange={(e) => setEditFirstName(e.target.value)} />
            <input type="text" value={editLastName} onChange={(e) => setEditLastName(e.target.value)} />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </div>
      <section className="account-info">
        {/* Contenu de la section, si nécessaire */}
      </section>
    </main>
  );
}

export default ProfileForm;