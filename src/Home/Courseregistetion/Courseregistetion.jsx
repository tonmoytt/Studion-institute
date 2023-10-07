import { useEffect, useState } from "react";

 

const Courseregistetion = () => {
    const [course,setcourse]=useState([])
    useEffect(() =>{
        fetch('stored.json')
        .then(res => res.json())
        .then(data => setcourse(data))
    },[])

    
    return (
        <div className="my-16" >
            <h1>course: {course.length}</h1>
             {
                // course.map(data => <h>{course.id}</h> )
             }
        </div>
    );
};

export default Courseregistetion;