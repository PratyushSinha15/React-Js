import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        // Render your posts here
        // Example: posts.map(post => <PostComponent key={post.id} post={post} />)
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>
                By <span>{post.author} </span> on <span>{post.category}</span>
              </p>
              <p>
                Published on <span>{post.date}</span>
              </p>
              <p>{post.content}</p>
              <div>
                {post.tags.map((tag) => (
                   <span key={tag}>#{tag}</span>
                ))}
              </div>
              {/* Render other post details as needed */}
            </div>
          ))}  
        </div>
      )}   
    </div>
  );
};

export default Blogs; 