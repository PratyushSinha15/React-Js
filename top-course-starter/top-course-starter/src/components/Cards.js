import React, { useState } from 'react'
import Card from './Card' //here we are importing the Card component so that we can use it here

const Cards = (props) => {
    let category = props.category;
    let courses = props.courses;
    const[LikedCourses,setLikedCourses]= useState([]);//here we declared a state to store the liked courses data

    //here we are getting all the courses in one array using Object.values() and forEach() method
    function getCourses(){
        if(category==="All"){
            let allCourses=[];
            Object.values(courses).forEach(array=>{
                array.forEach(courseData=>{
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        }
        else{
            return courses[category];
        }
        
        
    }




    //here we are creating a card component to show the data
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map((course)=>{
               return <Card key={course.id} course={course}
               LikedCourses={LikedCourses}
               setLikedCourses={setLikedCourses}/> //here we are passing the course data to Card component so that we can use it there
            })       
        }
    </div>
  );
}

export default Cards