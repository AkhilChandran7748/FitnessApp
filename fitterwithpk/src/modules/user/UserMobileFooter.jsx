import React from 'react';

const UserMobileFooter = () => {
  const menuItems = [
    { icon: 'bi-house', label: 'Home', url: '/' },
    { icon: 'bi-calendar', label: 'Updates', url: '/updates' },
    { icon: 'bi-person', label: 'Profile', url: '/profile' },
    { icon: 'bi-gear', label: 'Settings', url: '/settings' },
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