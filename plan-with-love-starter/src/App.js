import React, { useState } from "react";
import Tours from "./Components/Tours";
import data from "./data"

const App = () => {

  // here we are using useState to set the data or to acces data from the data.js file
  const [tours,serTours]=useState(data);

  function removeTour(id){
    const newTours=tours.filter((tour)=> tour.id !== id);
    serTours(newTours);
  }

  if(tours.length===0){
    return(
      <div>
        <h2>No Tours Left</h2>
        <button className="btn-red" onClick={()=>serTours(data)}>Refresh</button>
      </div>
    )
  }

  return(
    <div>
      {/* here we are passing the function inside the Tours.js file */}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
