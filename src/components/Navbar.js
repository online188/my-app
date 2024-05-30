// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import $ from 'jquery';
import './Navbar.css'; // Import custom CSS

function Navbar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    $('nav .dropdown').hover(
      function() {
        const $this = $(this);
        $this.addClass('show');
        $this.find('> a').attr('aria-expanded', true);
        $this.find('.dropdown-menu').addClass('show');
      },
      function() {
        const $this = $(this);
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        $this.find('.dropdown-menu').removeClass('show');
      }
    );
  }, []);

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container">
      <div className='row'>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <Link className={`navbar-brand ${getActiveClass('/')}`} to="/"><span><i className="fa-solid fa-house-chimney"></i></span></Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#ftco-nav" 
            aria-controls="ftco-nav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            <span className="fa fa-bars"></span> Menu
          </button>
          <form action="#" className="searchform order-lg-last">
            <div className="form-group d-flex">
              <input type="text" className="form-control pl-3" placeholder="Search" />
              <button type="submit" className="form-control search"><span className="fa fa-search"></span></button>
            </div>
          </form>
          <div className={`collapse navbar-collapse ${isCollapsed ? 'show' : ''}`} id="ftco-nav">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item dropdown ${location.pathname.startsWith('/tag') ? 'active' : ''}`}>
                <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</Link>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <Link className={`dropdown-item ${getActiveClass('/tag/XIUREN')}`} to="/tag/XIUREN">XIUREN</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/MyGirl')}`} to="/tag/MyGirl">MyGirl</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/XiaoYu')}`} to="/tag/XiaoYu">XiaoYu</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/DJAWA-Photo')}`} to="/tag/DJAWA-Photo">DJAWA Photo</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/Cosplay')}`} to="/tag/Cosplay">Cosplay</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/YouMi')}`} to="/tag/YouMi">YouMi</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/CreamSoda')}`} to="/tag/CreamSoda">CreamSoda</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/Pure-Media')}`} to="/tag/Pure-Media">Pure Media</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/MFStar')}`} to="/tag/MFStar">MFStar</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/ISHOW')}`} to="/tag/ISHOW">ISHOW</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/Moon-Night-Snap')}`} to="/tag/Moon-Night-Snap">Moon Night Snap</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/Loozy')}`} to="/tag/Loozy">Loozy</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/IMISS')}`} to="/tag/IMISS">IMISS</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/HuaYang')}`} to="/tag/HuaYang">HuaYang</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/SAINT-Photolife')}`} to="/tag/SAINT-Photolife">SAINT Photolife</Link>
                  <Link className={`dropdown-item ${getActiveClass('/tag/BLUECAKE')}`} to="/tag/BLUECAKE">BLUECAKE</Link>
                </div>
              </li>
              <li className={`nav-item ${getActiveClass('/top3days')}`}><Link className="nav-link" to="/top3days">Top 3 days</Link></li>
              <li className={`nav-item ${getActiveClass('/top7days')}`}><Link className="nav-link" to="/top7days">Top 7 days</Link></li>
              <li className={`nav-item ${getActiveClass('/top30days')}`}><Link className="nav-link" to="/top30days">Top 30 days</Link></li>
              <li className={`nav-item ${getActiveClass('/top60days')}`}><Link className="nav-link" to="/top60days">Top 60 days</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
