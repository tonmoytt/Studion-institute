// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Showfeaturesdata from "./showfeaturesdata";



const Featured = () => {
    const news = useLoaderData();
    // console.log(news);

    return (
        <div>
            <h1 className="text-4xl mb-10 font-semibold text-center  ">Featured Course :</h1>
            <h1 className="text-center text-3xl text-cyan-500 font-serif font-extrabold ">OUR SERVICES </h1>
            <hr className="mx-96 bg-red-500 text-red-400" />
            <hr className="mx-96 bg-red-500 text-red-400" />
            <hr className="mx-96 bg-red-500 text-red-400" />
            <hr className="mx-96 bg-red-500 text-red-400" />
            <hr className="mx-96 bg-red-500 text-red-400" />
            <hr className="mx-96 bg-red-500 text-red-400" />
            <hr className="mx-96 bg-red-500 text-red-400" />

           
            <div className="grid md:grid-cols-3 lg:grid-cols-3 p-6 bg-cyan-300   gap-6 mt-8">
            {
              news.map(data => <Showfeaturesdata key={data.id} data={data}> </Showfeaturesdata>)
            }
            </div>
            <Link to="/store"> <button className="text-green-200 text-xl mb-20 mt-6 font-serif text-center bg-emerald-400 w-full font-semibold px-2 py-1 hover:bg-yellow-400 rounded-md">Show all</button></Link>
        </div>
    );
};

export default Featured;