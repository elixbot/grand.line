import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import './game2.css';

function Game() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {isLoading && (
        <div style={loadingStyle}>
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/PLUyqrMVd22svykc/scene.splinecode"
        onLoad={handleLoad}  // Triggers when the Spline scene has loaded
      />
    </div>
  );
}

const loadingStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: '#333',
};

export default Game;
