import React, { useEffect } from 'react';

const DebugComponent = () => {
  useEffect(() => {
    console.log('Debug component mounted');
    console.log('Window dimensions:', window.innerWidth, 'x', window.innerHeight);
    console.log('User agent:', navigator.userAgent);
    
    // Check if CSS is loading
    const styleSheets = document.styleSheets;
    console.log('StyleSheets count:', styleSheets.length);
    
    // Check DOM structure
    const arcadeContainer = document.querySelector('.arcade-container');
    console.log('Arcade container found:', !!arcadeContainer);
    
    if (arcadeContainer) {
      console.log('Arcade container styles:', window.getComputedStyle(arcadeContainer));
      console.log('Arcade container children:', arcadeContainer.children.length);
    }
    
    // Check for any errors in the console
    console.log('Any previous errors will be above this line');
  }, []);

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '10px', 
      right: '10px',
      background: 'rgba(0,0,0,0.7)', 
      color: 'lime', 
      padding: '10px',
      borderRadius: '5px',
      zIndex: 9999,
      fontFamily: 'monospace'
    }}>
      Debug Mode Active
    </div>
  );
};

export default DebugComponent;
