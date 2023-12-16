import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import {apiUrl, filterData} from  "./data";
import { toast } from "react-toastify";

const App = () => {

  //here we are creating a useState hook for loading spinner to show when data is loading from api
  const [loading, setLoading] = useState(true);



  //here we are creating a usestate hook to store the data from api
  const [courses, setCourses] = useState(null);

  //here we are creating a function to filter the data
  const [category, setCategory] = useState(filterData[0].title); // here we are setting the default category to all

  //here we create async function to fetch data from api url

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output= await response.json();

      // output-->
      //here our data is in object form so we need to convert it into array form
      setCourses(output.data)
    }
    catch(error){
      toast.error("network error");
    }
    finally{
      setLoading(false);
    }
  }

  //here we are calling the function to fetch data from api
  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div className="min-h-screen flex-col flex bg-bgDark2">

      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>

      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        { 
          loading ? (<Spinner/>) : <Cards courses={courses} category={category}/>
        }
      </div>

    </div>
  )
};

export default App;
