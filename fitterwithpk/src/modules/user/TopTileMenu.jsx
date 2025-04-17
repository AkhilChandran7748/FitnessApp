import React from 'react';
import { RENDER_URL } from '../../Utils/Urls';

const TopTileMenu = () => {
  const menuItems = [
    {
      label: 'Daily Update',
      icon: 'bi-calendar-plus',
      to: RENDER_URL.VIEW_DAILY_UPDATES
    },
    {
      label: 'Weekly Update',
      icon: 'bi-clock',
      to: RENDER_URL.VIEW_WEEKLY_UPDATES
    },
    {
      label: 'Guidelines',
      icon: 'bi-info-circle',
      to: '/'
    },
    {
      label: 'Diet & Workout',
      icon: 'bi-info-circle',
      to: RENDER_URL.VIEW_DIET_PLAN
    }
  ];

  return (
    <div className="d-flex gap-3 overflow-auto py-3 px-2 no-scrollbar justify-center text-center">

      {menuItems.map((item, idx) => (
        <div className='top_card'>
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