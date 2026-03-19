import React, { useState } from 'react';
import { Users, Plus, Edit2, Trash2, Phone, MapPin } from 'lucide-react';

const Locataires = () => {
  const [locataires] = useState([
    { id: 1, nom_complet: 'Jean Dupont', fonction: 'Ingénieur', tel: '0612345678', adresse: 'Apt 12, Résidence Les Jasmins' },
    { id: 2, nom_complet: 'Marie Curie', fonction: 'Chercheuse', tel: '0698765432', adresse: 'Apt 4, Immeuble Le Phare' },
  ]);

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title">Locataires</h1>
          <p className="page-subtitle">Gestion des locataires de vos bâtiments.</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} /> Ajouter un Locataire
        </button>
      </div>

      <div className="card glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--primary-light)' }}>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Nom</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Fonction</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Contact</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Adresse</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {locataires.map((loc) => (
              <tr key={loc.id} style={{ borderBottom: '1px solid var(--border)', transition: 'background-color 0.2s ease' }} className="hover-row">
                <td style={{ padding: '1rem 1.5rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {loc.nom_complet.charAt(0)}
                  </div>
                  {loc.nom_complet}
                </td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>{loc.fonction}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                    <Phone size={14} /> {loc.tel}
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                    <MapPin size={14} /> {loc.adresse}
                  </div>
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

export default Locataires;
