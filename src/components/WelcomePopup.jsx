import React from 'react';
// defines WelcomePopup component with prop onStart
export default function WelcomePopup({ onStart }) {
  return (
    <div className="flex w-full h-full">
      <div className="overlay">
        <div className="popup">
          <img src="src/assets/logo.png" alt="PocketPie Logo" height="300" />
          <div className="h1-wrapper">
            <h1 className="welcome">PocketPie</h1>
          </div>
          <p className="popuptext">London Student Budget Calculator</p>
          <button id="fly" onClick={onStart}>Start</button> {/* Use onStart prop */}
        </div>
      </div>
    </div>
  );
}