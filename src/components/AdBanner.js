import React from 'react';
import PropTypes from 'prop-types';
import './AdBanner.css'; // Import custom CSS for styling

function AdBanner({ src, alt, link, className }) {
  return (
    <div className={`ad-banner ${className}`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} />
      </a>
    </div>
  );
}

AdBanner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
};

AdBanner.defaultProps = {
  link: '#',
  className: '',
};

export default AdBanner;
