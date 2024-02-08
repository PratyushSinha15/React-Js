import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    //destructuring on the fly 
    const{resData}=props;
  
    const{
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,deliveryTime, 
    }=resData?.data;
    return(
      <div className="res-card">
      <img className="res-logo" 
      
      src="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.679466959904303&lng=77.50065922737122&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING\" 
      // src={CDN_URL+cloudinaryImageId}
      
      alt="swigy foto" />
        <h3> {name} </h3>
        <h4>P{cuisines.join(',')} </h4>
        <h4>{costForTwo}  </h4>
        <h4>{avgRating} stars  </h4>
        <h4>{deliveryTime} minutes </h4>
      </div>
    )
  }

  export default RestaurantCard;