import React from 'react';
import AdBanner from './AdBanner';
import logo from './logo.png'; // Import the logo image

function Header() {
  return (
    <div className="container main-header">
      <section className="ftco-section">
        <div className="row">
          <div className="col-lg-4">
            <a href="/">
              <img src={logo} alt="MissChina Logo" className="logo" />
            </a>
          </div>
          <div className="header-banner col-lg-8">
            <AdBanner
              src="https://via.placeholder.com/728x90"
              alt="Header Banner Ad"
              link="#"
              className="header-banner"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
