import React from 'react';

const TestComponent = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <h1 style={{
        fontSize: '2rem',
        color: '#0066cc',
        marginBottom: '1rem'
      }}>
        My First React Component
      </h1>
      <p style={{
        color: '#666666'
      }}>
        Successfully deployed to GitHub Pages!
      </p>
    </div>
  );
};

export default TestComponent;