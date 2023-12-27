//we create a context to share the state between components and we wrap the App component with the AppContextProvider component.

//step 1 is to create a context using the createContext() function from React.
import { createContext } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext=createContext();

//step 2 is to create a provider component that will wrap the App component and will provide the state to all the components that are children of the App component.
export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null); 

    //here we have to fill the value object with the state and the functions that will update the state.

    //to bring the data from the API we will use the useEffect() hook.
    async function fetchBlogPosts(page = 1){
        setLoading(true);
        const url =`${baseUrl}?page=${page}`;
        try { 
            const result=await fetch(url);
            const data=await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

             
        } catch (error) {
            console.log("error found");
            setPage(1);
            setPosts([]);
            setTotalPages(null); 
        }
        setLoading(false); 
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }


    //we create a value object that will contain the state and the functions that will update the state.
    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange 
    };

    return  <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
}