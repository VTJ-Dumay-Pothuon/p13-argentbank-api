import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../actions/profile.action'

import EntryItem from '../components/EntryItem'

function User() {
  const dispatch = useDispatch()
  const { profileData } = useSelector(state => state.profile)

  useEffect(() => {
    document.title = "Argent Bank - My profile"
    dispatch(fetchUserProfile())
  }, [dispatch]);

  // Affichez les données récupérées dans la console
  useEffect(() => {
    if (profileData) {
      console.log('Profile Data:', profileData)
    }
  }, [profileData]);
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{profileData?.body.firstName} {profileData?.body.lastName}!</h1>
        <button className="edit-button">Edit Name</button>
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