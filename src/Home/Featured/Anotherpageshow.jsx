import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams, } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";



const Anotherpageshow = () => {
    const [data, setdata] = useState()
    // console.log(data);
    const params = useParams()
    // console.log(params);
    const loader = useLoaderData()
    // console.log(loader);

    useEffect(() => {
        const findloader = loader?.find(data => data.id === parseInt(params.id))
        setdata(findloader);
    }, [params.id, loader])


    return (
        <div className="mt-10 bg-teal-200">
            <Navbar></Navbar>
        <div className="mt-10 md:mt-16 lg:mt-20 p-6 md:16 lg:p-20 bg-teal-200">
             
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className="m-2 w-full" src={data?.img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center">{data?.category}</h2>
                    <p> {data?.description}</p>
                    <div className="card-actions items-center justify-between">
                        <p className="text-lg font-semibold">Price: {data?.price}</p>
                        <Link to="/login"><button className=" px-2 py-1 rounded-md btn btn-outline btn-secondary">Buy Now</button></Link>
                    </div>
                    
                </div>

            </div>
            </div>
        </div>
    );
};

export default Anotherpageshow;