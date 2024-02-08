import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mock-data";



const Body=()=>{
    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn">Top Rated Restaurants </button>
        </div>
        <div className="res-container">
          {/* <RestaurantCard  />
          <RestaurantCard /> */}
           {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
  
         {resList.map((restaurant)=>(
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
         ))}
  
        </div>
      </div>
    )
  }

  export default Body;