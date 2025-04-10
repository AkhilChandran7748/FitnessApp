import React from 'react';

const TopTileMenu = () => {
  const menuItems = [
    {
      label: 'Daily Update',
      icon: 'bi-calendar-plus',
      to: '/daily-updates'
    },
    {
      label: 'Weekly',
      icon: 'bi-clock',
      to: '/weekly-updates'
    },
    {
      label: 'Guidelines',
      icon: 'bi-info-circle',
      to: '/guidelines'
    },
    {
      label: 'Others',
      icon: 'bi-info-circle',
      to: '/'
    }
  ];

  return (
    <div className="d-flex gap-3 overflow-auto py-3 px-2 no-scrollbar justify-center text-center">
     
      {menuItems.map((item, idx) => (
        <div className='card shadow top_card'>
          <button
            key={idx}
            className="d-flex flex-column align-items-center justify-content-center bg-white rounded-3 shadow-sm p-3 border-0 menu-card"
            style={{ minWidth: '80px', height: '80px' }}
            onClick={() => window.location.href = item.to}
          >
            <i className={`${item.icon} text-secondary mb-1`} style={{ fontSize: '1.25rem' }}></i>
            <span className="text-secondary" style={{ fontSize: '0.75rem' }}>{item.label}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default TopTileMenu;