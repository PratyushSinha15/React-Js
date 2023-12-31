import React from "react";
import {fcLike} from "react-icons/fc";
const Card = ({course}) => {
    return (
        <div>
            <div>
                <img src={course.image.url} alt="course" />
                
                <div>
                    <button>
                        <fcLike fontSize="1.7rem"/>
                    </button>
                </div>
            </div>
            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>
        </div>
    )
};

export default Card;