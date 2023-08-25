import React from "react"

function EntryItem({ id, title, amount, description }) {
    return (
      <div className="account-content-wrapper" id={id} >
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
    );
  }

export default EntryItem;