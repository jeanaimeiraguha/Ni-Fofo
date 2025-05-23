import React from 'react';

const Home = () => {
  const cardStyle = {
    width: '280px',
    padding: '1.5rem',
    borderRadius: '16px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
    color: 'white',
    transition: 'transform 0.2s ease-in-out',
    textAlign: 'center',
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '24px',
    marginTop: '2rem',
  };

  return (
    <div style={{ color: '#2c3e50', padding: '3rem 1rem', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ fontWeight: '800', textAlign: 'center', marginBottom: '1rem' }}>
        🚗 Parking Manager Dashboard
      </h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#555' }}>
        Manage your parking spaces, vehicles, and payments efficiently.
      </p>

      <div style={containerStyle}>
        <div
          style={{
            ...cardStyle,
            backgroundColor: '#007bff',
          }}
        >
          <i className="bi bi-car-front-fill fs-1 mb-3"></i>
          <h4 style={{ fontWeight: '700' }}>Manage Cars</h4>
          <p style={{ fontSize: '0.95rem' }}>
            Easily add, view, and manage all vehicles in the system.
          </p>
        </div>

        <div
          style={{
            ...cardStyle,
            backgroundColor: '#28a745',
          }}
        >
          <i className="bi bi-columns-gap fs-1 mb-3"></i>
          <h4 style={{ fontWeight: '700' }}>Parking Slots</h4>
          <p style={{ fontSize: '0.95rem' }}>
            Monitor and organize your available and occupied slots.
          </p>
