import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Featured = () => {
    const [course1, setCourse1] = useState()
    useEffect(() => {
        fetch('/feature.json')
            .then(res => res.json())
            .then(data => setCourse1(data))
    }, [])
    return (
        <div>
            <h1 className="text-xl ml-10 md:40 lg:ml-60">Featured Categories : <Link to="/store"> <button className="text-green-400 font-serif font-semibold px-2 py- rounded-md">Show all</button></Link></h1>

            {/* {
                course1.map(data => <Link to="/login" data={data} key={data.id}>Show all</Link>)
            } */}
        </div>
    );
};

export default Featured;