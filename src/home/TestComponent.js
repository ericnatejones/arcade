import React from 'react';

const TestComponent = () => {
  console.log('TestComponent rendering');
  return (
    <div style={{ 
      backgroundColor: 'purple', 
      color: 'white', 
      padding: '20px',
      margin: '20px',
      borderRadius: '10px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Test Component</h1>
      <p>This is a test component to check if rendering is working properly.</p>
    </div>
  );
};

export default TestComponent;
