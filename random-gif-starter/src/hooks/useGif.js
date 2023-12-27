// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

// const useGif = (tag) => {};

// export default useGif;
// useGif.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useGif() {
  const [tag, setTag] = useState('');
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  async function fetchData() {
    setLoading('true');
    const RandomTagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
    const url = tag ? RandomTagurl : randomMemeurl;

    try {
      const { data } = await axios.get(url);
      const imageSrc = data.data.images.downsized_large.url;
      setGif(imageSrc);
      setLoading('false');
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading('false');
    }
  }

  useEffect(() => {
    fetchData();
  }, [tag]);

  return { gif, loading, fetchData, setTag };
}

export default useGif;
