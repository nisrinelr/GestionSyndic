import React, { useState } from 'react';
import { Building2, Plus, Edit2, Trash2 } from 'lucide-react';

const Batiments = () => {
  const [batiments] = useState([
    { id: 1, nom: 'Résidence Les Jasmins', nombre_appartement: 12 },
    { id: 2, nom: 'Immeuble Le Phare', nombre_appartement: 8 },
  ]);

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title">Bâtiments & Appartements</h1>
          <p className="page-subtitle">Gérez vos bâtiments et leurs appartements associés.</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} /> Ajouter un Bâtiment
        </button>
      </div>

      <div className="card glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--primary-light)' }}>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>ID</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Nom du Bâtiment</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Appartements</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {batiments.map((b) => (
              <tr key={b.id} style={{ borderBottom: '1px solid var(--border)', transition: 'background-color 0.2s ease' }} className="hover-row">
                <td style={{ padding: '1rem 1.5rem' }}>#{b.id}</td>
                <td style={{ padding: '1rem 1.5rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ padding: '0.5rem', background: 'var(--primary-light)', borderRadius: '8px', color: 'var(--primary)' }}>
                    <Building2 size={18} />
                  </div>
                  {b.nom}
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--background)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: '500' }}>
                    {b.nombre_appartement} unités
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <button className="btn" style={{ padding: '0.5rem', color: 'var(--primary)' }}><Edit2 size={16} /></button>
                  <button className="btn" style={{ padding: '0.5rem', color: 'var(--danger)' }}><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>{`
        .hover-row:hover { background-color: var(--background); }
      `}</style>
    </div>
  );
};

export default Batiments;
