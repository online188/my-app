import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Tag({ tag }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`https://backend-k9e4.onrender.com/api/posts?tag=${tag}`);
        setPosts(res.data.posts);
      } catch (err) {
        console.error(err);
        setPosts([]);
      }
    };

    fetchPosts();
  }, [tag]);

  return (
    <main className="container">
      <div className="row main-body">
        <div className="col-lg-8 content mt-4">
          <div className="page-content">
            <h1 style={{ textAlign: 'start', color: '#333', backgroundColor: '#fff', fontSize: '28px', border: 'none' }}>
              <span>{tag}</span>
            </h1>

            <div className="posts">
              {posts.length > 0 ? (
                posts.map(post => (
                  <article className="mb-2 item-list" key={post._id}>
                    <div className="post-thumbnail">
                      <Link to={`/post/${post._id}`}>
                        <img width="600" height="315" src={post.thumbnail} alt={post.title} />
                        <span className="fa overlay-icon"></span>
                      </Link>
                    </div>
                    <h2 className="post-box-title">
                      <Link to={`/post/${post._id}`}>{post.title}</Link>
                    </h2>
                    <p className="post-meta">
                      <span className="post-views"><i className="fa fa-eye"></i> {post.postViews} views </span>
                      <span className="post-cats"><i className="fa fa-tags"></i> <a href="#" rel="tag">{post.tag}</a></span>
                    </p>
                    <div className="clear"></div>
                  </article>
                ))
              ) : (
                <p>No posts found for this tag.</p>
              )}
            </div>
          </div>
        </div>
        <aside className="col-lg-4 sidebar mt-4">
          <div className="banner mt-4">
            <img src="https://via.placeholder.com/300x550" alt="Sidebar Banner Ad" />
          </div>
          <div className="banner mt-4">
            <img src="https://via.placeholder.com/300x550" alt="Sidebar Banner Ad" />
          </div>
          <div className="banner mt-4">
            <img src="https://via.placeholder.com/300x550" alt="Sidebar Banner Ad" />
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Tag;
