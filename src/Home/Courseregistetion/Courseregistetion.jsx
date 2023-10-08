import { useEffect, useState } from "react";
import CourseShow from "./CourseShow";
import { useLoaderData } from "react-router-dom";

 

const Courseregistetion = () => {
 
    const [course,setcourse]=useState([])
    useEffect(() =>{
        fetch('stored.json')
        .then(res => res.json())
        .then(data => setcourse(data))
        // .then(data => console.log(data))
    },[])

    
    return (
        <div className="my-16" >
            <h1 className="text-center text-4xl text-cyan-500 font-serif font-extrabold ">OUR SERVICES </h1>
            <hr className="mx-96 bg-red-500 text-red-400" />
            <hr className="mx-96 bg-red-500 text-red-400" />
            <hr className="mx-96 bg-red-500 text-red-400" />
            <hr className="mx-96 bg-red-500 text-red-400" />
            <hr className="mx-96 bg-red-500 text-red-400" />
            <hr className="mx-96 bg-red-500 text-red-400" />
            <hr className="mx-96 bg-red-500 text-red-400" />
            
             <div className="grid md:grid-cols-3 lg:grid-cols-3   gap-6 mt-8">
             {
                course.map(data => <CourseShow key={data.id} propsData={data}></CourseShow> )
             }
             </div>
        </div>
    );
};

export default Courseregistetion;