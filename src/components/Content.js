import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdBanner from './AdBanner';

function Content() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`https://backend-k9e4.onrender.com/api/posts?page=${currentPage}&limit=5`);
        setPosts(res.data.posts);
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="body-banner col-lg-9">
        <AdBanner
            src="https://via.placeholder.com/728x90"
            alt="Body Banner Ad"
            link="#"
            className="body-banner"
        />
      </div>
      {posts.map((post, index) => (
        <article className="mb-2 item-list" key={index}>
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
            <span className="post-cats"><i className="fa fa-tags"></i> <a href="#" rel="tag">{post.tag}, {post.model}</a></span>
          </p>
          <div className="clear"></div>
        </article>
      ))}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button 
            key={i} 
            className={currentPage === i + 1 ? 'active' : ''} 
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Content;
