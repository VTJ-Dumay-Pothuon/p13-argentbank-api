import React from 'react'

import chat from '../assets/images/icon-chat.png'
import money from '../assets/images/icon-money.png'
import security from '../assets/images/icon-security.png'
const iconMap = { chat, money, security }

function FeatureItem({ icon, title, description }) {
  return (
    <div className="feature-item">
      <img src={iconMap[icon]} alt="Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureItem;