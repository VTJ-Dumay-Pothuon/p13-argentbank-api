import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile, updateUserProfile } from '../actions/profile.action'

import EntryItem from '../components/EntryItem'

function User() {
  const dispatch = useDispatch()
  const { profileData } = useSelector(state => state.profile)

  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    document.title = "Argent Bank - My profile"
    dispatch(fetchUserProfile())
  }, [dispatch]);

  const editMode = () => {
    setFirstName(profileData?.body.firstName);
    setLastName(profileData?.body.lastName);
    setEditing(true);
  };

  const handleSave = () => {
    const updatedData = {
      firstName,
      lastName,
    };

    dispatch(updateUserProfile(updatedData));
    setEditing(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back<br />

          {editing ? (
            <div>
              <input
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
              />
            </div>
          ) : (
            profileData ?
            (`${profileData.body.firstName} ${profileData.body.lastName}!`)
            : ('––––––––––')
          )}

        </h1>
        {editing ? (
          <button className="edit-button" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="edit-button" onClick={editMode}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <EntryItem
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <EntryItem
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <EntryItem
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default User