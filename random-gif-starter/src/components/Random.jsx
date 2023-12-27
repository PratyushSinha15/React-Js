import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;
 const Random=() =>{
  
  // const [gif, setGif] = useState('');
  // //creating a state variable which descide the loading state of the page 
  // const [loading, setLoading] = useState('false');

  // async function fetchData() {
  //   //setting the loading state to true because we are fetching the data from the api
  //   setLoading('true');
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const {data} = await axios.get(url);
  //     const imageSrc = data.data.images.downsized_large.url;
  //     setGif(imageSrc);
  //     setLoading('false');//setting the loading state to false because we have fetched the data from the api
  // }
  

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const {gif, loading, fetchData} = useGif();

  function clickHandler() {
    fetchData();
  }

  return(
    <div className="w-1/2 bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">Random Gif</h1>

    {
      loading === 'true' ? (<Spinner/>) : <img src={gif} alt="random-gif" width="450" />
    } 
      <button onClick={clickHandler} className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold">CLICK FOR NEW</button>
    </div>
  );
}

export default Random;