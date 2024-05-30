import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://backend-k9e4.onrender.com/api/posts/search?q=${query}`);
      setResults(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search posts..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map(post => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <img src={post.thumbnail} alt={post.title} />
            <p>{post.postViews} views</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
