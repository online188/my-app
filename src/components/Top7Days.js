import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdBanner from './AdBanner';
// import './Tag.css'; 

function Top3Days() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('https://backend-k9e4.onrender.com/api/posts/top?day=7');
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container">
      <div className="row main-body">
        <div className="col-lg-8 content mt-4">
          <div className="page-content">
            <h1 style={{ textAlign: 'start', color: '#333', backgroundColor: '#fff', fontSize: '28px', border: 'none' }}>
              <span>Top Posts in the Last 7 Days</span>
            </h1>
            {posts.map((post) => (
              <article className="mb-2 item-list" key={post._id}>
                <div className="post-thumbnail">
                  <Link to={`/post/${post._id}`}>
                    <img width="600" height="315" src={post.thumbnail} alt="" />
                    <span className="fa overlay-icon"></span>
                  </Link>
                </div>
                <h2 className="post-box-title">
                  <Link to={`/post/${post._id}`}>{post.title}</Link>
                </h2>
                <p className="post-meta">
                  <span className="post-views"><i className="fa fa-eye"></i> {post.postViews} </span>
                  <span className="post-cats"><i className="fa fa-tags"></i> <Link to={`/tag/${post.tag}`}>{post.tag}</Link></span>
                </p>
                <div className="clear"></div>
              </article>
            ))}
          </div>
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
    </main>
  );
}

export default Top3Days;
