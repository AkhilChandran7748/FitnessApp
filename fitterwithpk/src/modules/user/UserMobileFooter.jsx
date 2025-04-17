import React from 'react';
import { RENDER_URL } from '../../Utils/Urls';

const UserMobileFooter = () => {
  const menuItems = [
    { icon: 'bi-house', label: 'Home', url: RENDER_URL.STAFF_DASHBOARD },
    { icon: 'bi-calendar', label: 'Updates', url: RENDER_URL.VIEW_WEEKLY_UPDATES },
    { icon: 'bi-person', label: 'Plan', url: RENDER_URL.VIEW_DIET_PLAN },
    { icon: 'bi-gear', label: 'Settings', url: RENDER_URL.STAFF_DASHBOARD },
  ];

  return (
    <footer className="fixed-bottom bg-white border-top mobile-footer">
      <nav className="d-flex justify-content-around align-items-center" style={{ height: '60px' }}>
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => window.location.href = item.url}
            className="btn btn-link text-secondary d-flex flex-column align-items-center flex-grow-1 h-100 border-0 text-decoration-none"
          >
            <i className={`${item.icon}`} style={{ fontSize: '1.25rem' }}></i>
            <span className="small mt-1">{item.label}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};

export default UserMobileFooter;