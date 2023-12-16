import {useState} from "react";
import "./Card.css"


//here we are destructuring the props object and using it in the component 
// we are using all the values from the data file and passing it to the card component
function Cards({id, name, info, image, price, removeTour}){

    const[readmore, setReadmore]=useState(false);
    //here we are using substring to limit the description to 200 characters
    const description= readmore ? info : info.substring(0,200) + "....";

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image"></img>
            
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price"> {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={()=> removeTour(id)}>Not Interested</button>
        </div>
    )
}

export default Cards;