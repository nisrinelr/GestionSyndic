import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Building2, Users, Receipt } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { path: '/', name: 'Dashboard', icon: Home },
    { path: '/batiments', name: 'Bâtiments', icon: Building2 },
    { path: '/locataires', name: 'Locataires', icon: Users },
    { path: '/paiements', name: 'Paiements', icon: Receipt },
  ];

  return (
    <aside className="sidebar glass-panel">
      <div className="sidebar-header">
        <div className="logo-icon">GS</div>
        <h2 className="logo-text">GestionSyndic</h2>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon className="nav-icon" size={20} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">A</div>
          <div className="user-info">
            <span className="user-name">Admin Syndic</span>
            <span className="user-role">Gérant</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
