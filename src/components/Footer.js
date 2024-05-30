import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import custom CSS
import AdBanner from './AdBanner';

function Footer() {
  return (
    <div className="container">
      <footer className="footer bg-dark">
        <div className="row">
          <div className="col-lg-8">
            <h5>Tags</h5>
            <p className="footer-tags">
              Korean Photo Sets: &nbsp;
              <Link to="/tag/BLUECAKE">BLUECAKE</Link>
              <Link to="/tag/CreamSoda">CreamSoda</Link>
              <Link to="/tag/DJAWA">DJAWA</Link>
              <Link to="/tag/Espacia-Korea">Espacia Korea</Link>
              <Link to="/tag/LEEHEE-EXPRESS">LEEHEE EXPRESS</Link>
              <Link to="/tag/Pure-Media">Pure Media</Link>
              <Link to="/tag/Loozy">Loozy</Link>
              <Link to="/tag/SAINT-Photolife">SAINT Photolife</Link>
              <Link to="/tag/Moon-Night-Snap">Moon Night Snap</Link>
              <Link to="/tag/Paranhosu">Paranhosu</Link>
              <br />
              Chinese Photo Sets: &nbsp;
              <Link to="/tag/FEILIN">FEILIN</Link>
              <Link to="/tag/HuaYang">HuaYang</Link>
              <Link to="/tag/IMISS">IMISS</Link>
              <Link to="/tag/MFStar">MFStar</Link>
              <Link to="/tag/MyGirl">MyGirl</Link>
              <Link to="/tag/UGIRLS-Ai-You-Wu-App">UGIRLS - Ai You Wu App</Link>
              <Link to="/tag/XiaoYu">XiaoYu</Link>
              <Link to="/tag/XingYan">XingYan</Link>
              <Link to="/tag/XIUREN">XIUREN</Link>
              <Link to="/tag/YouMi">YouMi</Link>
            </p>
            <div className="banner-ad-large">
              <AdBanner
                src="https://via.placeholder.com/728x90"
                alt="Footer Banner Ad"
                link="#"
                className="footer-banner"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="banner-ad">
              <AdBanner
                src="https://via.placeholder.com/300x250"
                alt="Footer Banner Ad"
                link="#"
                className="footer-banner"
              />
            </div>
          </div>
      </div>
    </footer>
  </div>
  );
}

export default Footer;
