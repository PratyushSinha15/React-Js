import React, {useState, useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;
 const Tag=() =>{
  
  const {gif, loading, fetchData, setTag,tag} = useGif();


  function clickHandler() {
    //here we are fetching the data from the api that user searched for
    fetchData();
  }

  function changeHandler(event) {
    //here we are fetching the data from the api that user searched for
    setTag(event.target.value);
  }


  return(
    <div className="w-1/2 bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">Search Random</h1>

    {
      loading === 'true' ? (<Spinner/>) : <img src={gif} alt="random-gif" width="450" />
    } 

    <input
    className='w-10/12 bg-white text-xl py-2 rounded-lg font-bold'
    type='text'
    placeholder='Search for a gif'
    onChange={changeHandler}
    value={tag} 
    />

    
    <button onClick={clickHandler} className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold">CLICK FOR NEW</button>
    </div>
  );
}

export default Tag;