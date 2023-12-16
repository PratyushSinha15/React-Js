import React from 'react';
import Card from './Card';
const Cards = ({courses}) => {
    let allCourses=[];

    //it return the list of all courses in the courses object 
    const getCourses=()=>{
        console.log(courses);
         Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            }) 
         })
         return allCourses;
    }



    return (
        <div>
            {getCourses() .map((course) => (
                <Card key={course.id} course={course} />
            ))}
        </div>
    )
};

export default Cards;