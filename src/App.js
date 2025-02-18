import React from 'react';

function App() {
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
        My First React App
      </h1>
      <p style={{
        color: '#666666'
      }}>
        Successfully created React app!
      </p>
    </div>
  );
}

export default App;