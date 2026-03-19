import React, { useState } from 'react';
import { Receipt, CheckCircle2, Clock, Plus } from 'lucide-react';

const Paiements = () => {
  const [versements] = useState([
    { id: 1, locataire: 'Jean Dupont', montant: '500.00', date_paiement: '2023-10-01', status_validation: true },
    { id: 2, locataire: 'Marie Curie', montant: '650.00', date_paiement: '2023-10-05', status_validation: false },
  ]);

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title">Paiements (Versements)</h1>
          <p className="page-subtitle">Suivi des paiements des locataires.</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} /> Nouveau Versement
        </button>
      </div>

      <div className="card glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--primary-light)' }}>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Locataire</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Montant</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Date</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Statut</th>
            </tr>
          </thead>
          <tbody>
            {versements.map((v) => (
              <tr key={v.id} style={{ borderBottom: '1px solid var(--border)', transition: 'background-color 0.2s ease' }} className="hover-row">
                <td style={{ padding: '1rem 1.5rem', fontWeight: '500' }}>{v.locataire}</td>
                <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--primary)' }}>{v.montant} MAD</td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>{new Date(v.date_paiement).toLocaleDateString('fr-FR')}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  {v.status_validation ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.75rem', backgroundColor: '#d1fae5', color: '#059669', borderRadius: '999px', fontSize: '0.875rem', fontWeight: '600' }}>
                      <CheckCircle2 size={14} /> Validé
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.75rem', backgroundColor: '#fef3c7', color: '#d97706', borderRadius: '999px', fontSize: '0.875rem', fontWeight: '600' }}>
                      <Clock size={14} /> En attente
                    </span>
                  )}
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

export default Paiements;
