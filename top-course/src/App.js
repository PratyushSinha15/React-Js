import React , {useState,useEffect}from "react";
import Navbar from "./components/Navbar";
import Cards from './components/Cards';
import Filter from "./components/Filter";
import { apiUrl,filterData } from "./data"; //to get the data we need to do apicall
import { toast } from "react-toastify";

const App = () => {

  const [courses,setCourses]=useState(null);

  //here we get the data from the api and store it in the state variable
  //here we use useEffect to do api call 

  useEffect(()=>{
    const fetchData=async() =>{
      //we use try catch block for calling api call

      try{
        const response=await fetch(apiUrl); //here we call the api
        const output=await response.json();   // here we convert the data into json format
        setCourses(output.data); //here we set the data in the state variable
        // console.log(data);
      }catch(error){
        toast.error("Something went wrong");
      }
    } 
    fetchData();
  },[])


  return (
    <div>
      
      <Navbar/>

      <Filter filterData={filterData} />

      <Cards courses={courses}/>
    </div>
  )
};

export default App;
