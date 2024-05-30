import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './PostDetail.css'; // Import custom CSS for styling

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [randomPosts, setRandomPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`https://backend-k9e4.onrender.com/api/posts/${id}?page=${currentPage}&limit=5`);
        setPost(res.data.post);
        setImages(res.data.images);
        setTotalPages(res.data.totalPages);
        window.scrollTo(0, 0); // Scroll to top when post changes
      } catch (err) {
        console.error(err);
      }
    };

    fetchPost();
  }, [id, currentPage]);

  useEffect(() => {
    const fetchRandomPosts = async () => {
      try {
        const res = await axios.get('https://backend-k9e4.onrender.com/api/posts/random');
        setRandomPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRandomPosts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`, { replace: true });
    window.scrollTo(0, 0); // Scroll to top when navigating to a new post
  };

  if (!post) return <div>Loading...</div>;

  return (
    <main className="container">
      <div className="row main-body">
        <div className="col-lg-12 content mt-4">
          <div className="page-content">
            <h1 style={{ textAlign: 'start', color: '#333', backgroundColor: '#fff', fontSize: '28px', border: 'none' }}>
              <span>{post.title}</span>
            </h1>
            <div className="box info aligncenter">
              <div className="box-inner-block">
                <i className="fa-solid fa-circle-info" style={{ fontSize: '65px', color: '#2cb4da', float: 'left', marginLeft: '-77px' }}></i>
                <div>
                  INFORMATION:<br />
                  <strong>Model:</strong> {post.title}<br />
                  <strong>Number of items:</strong> {post.numberOfItems}<br />
                  <strong>File size:</strong> {post.fileSize}<br />
                  <strong>Dimensions:</strong> {post.dimensions}<br />
                  <strong>Password unrar:</strong> <input type="text" size="11" readOnly value="misskon.com" /><br />
                  Please download to view this album in original quality and without watermark.<br />
                </div>
              </div>
            </div>
            <p style={{ textAlign: 'center' }} className="mt-4 mb-4">
              <a href={post.linkMediaFire} target="_blank" rel="noopener noreferrer" className="shortc-button blue">
                <i className="fa fa fa-download"></i> Download link: MediaFire
              </a>
            </p>
            <p style={{ textAlign: 'center' }} className="mt-4 mb-4">
              <a href={post.linkTerraBox} target="_blank" rel="noopener noreferrer" className="shortc-button green">
                <i className="fa fa fa-download"></i> Download link: TerraBox
              </a>
            </p>
            <div className="images">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
              ))}
            </div>
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
          <h3 className="ml-4">View More:</h3>
          <div className="row p-4">
            {randomPosts.map((post) => (
              <div className="view-more col-lg-4 content mt-4" key={post._id}>
                <div className="yarpp-thumbnail" rel="norewrite" onClick={() => handlePostClick(post._id)}>
                  <img width="310" height="165" src={post.thumbnail} className="attachment-tie-medium size-tie-medium wp-post-image" alt={post.title} decoding="async" loading="lazy" />
                  <span className="yarpp-thumbnail-title">{post.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostDetail;
