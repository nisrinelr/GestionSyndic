import React from 'react';

const Dashboard = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Tableau de Bord</h1>
      <p className="page-subtitle">Aperçu général de la gestion de votre syndic.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div className="card glass-panel" style={{ borderTop: '4px solid var(--primary)' }}>
          <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Total Bâtiments</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>12</p>
        </div>
        
        <div className="card glass-panel" style={{ borderTop: '4px solid var(--secondary)' }}>
          <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Total Locataires</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>48</p>
        </div>
        
        <div className="card glass-panel" style={{ borderTop: '4px solid var(--accent-color, #f59e0b)' }}>
          <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Paiements (Ce mois)</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>32/48</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
