import './Tours.css';
import Card from './Card';

//to map the data from data.js file we need to use map function and pass the data as props to the card component
function Tours({tours, removeTour}){
    return (
        <div>
            <div><h2>Plan With Love</h2></div>
            <div> 
                {tours.map((tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })} 
            </div>
        </div>
    );
}

export default Tours;