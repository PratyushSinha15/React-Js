import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";

const Card = (props) => {
    let course=props.course;
    let LikedCourses=props.LikedCourses;
    let setLikedCourses=props.setLikedCourses;
    function clickHandler(){
        //here we are checking if the course is already liked or not
        if(LikedCourses.includes(course.id)){ 
            //if the course is already liked then we are removing it from the liked courses array
            setLikedCourses((prev)=> prev.filter((cid)=>(cid!==course.id) ) );
            toast.warning("like removed");
        }else{
            //if the course is not liked then we are adding it to the liked courses array
            if(LikedCourses.length ===0){
                setLikedCourses([course.id]); 
            }else{
                setLikedCourses((prev)=> [...prev,course.id]);
            }
            toast.success("Liked Successfully"); 
        }

    }
  return (
    <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
        <div className='relative '>
            <img src={course.image.url} />

            <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                <button onClick={clickHandler}>
                    {/* here we are checking if the course is already liked or not */}
                    {LikedCourses.includes(course.id) ?  <FcLike fontSize="1.75rem"/>:<FcLikePlaceholder fontSize="1.75rem"/> }
                    {/* <FcLike fontSize="1.75rem"/> */}
                </button>
            </div>
        </div> 
        <div className='p-4'>
            <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length>100? course.description.slice(0,100)+"...":course.description
                }
            </p>
        </div>
    </div>
  )
}

export default Card