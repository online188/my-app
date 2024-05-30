import React from 'react';
import Content from './Content';
import AdBanner from './AdBanner';

function Home() {
  return (
    <div className="row main-body">
      <div className="col-lg-8 content mt-4">
        <Content />
      </div>
      <aside className="col-lg-4 sidebar mt-4">
        <div className="banner mt-4">
          <AdBanner
            src="https://via.placeholder.com/300x550"
            alt="Sidebar Banner Ad"
            link="#"
            className="header-banner"
            />
        </div>
        <div className="banner mt-4">
          <AdBanner
            src="https://via.placeholder.com/300x550"
            alt="Sidebar Banner Ad"
            link="#"
            className="header-banner"
            />
        </div>
        <div className="banner mt-4">
          <AdBanner
            src="https://via.placeholder.com/300x550"
            alt="Sidebar Banner Ad"
            link="#"
            className="header-banner"
            />
        </div>
      </aside>
    </div>
  );
}

export default Home;
