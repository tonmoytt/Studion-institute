// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Showfeaturesdata from "./showfeaturesdata";



const Featured = () => {
    const news = useLoaderData();
    // console.log(news);

    return (
        <div>
            <hr />
            <hr />
            <hr className="mb-4" />
            <h1 className="text-3xl font-semibold text-center  ">Featured Categories :</h1>
            <h1 className="text-2xl text-blue-400 mt-10 text-center"> <span className="bg-green-200 px-3 rounded-lg font-semibold">Most useful content</span> <hr className="mx-96 mt-2" /> <hr className="mx-96" /><hr className="mx-96" /></h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 md:bg-red-300 lg:bg-red-300 p-10 my-10 " >
            {
              news.data.map(data => <Showfeaturesdata key={data.id} data={data}> </Showfeaturesdata>)
            }
            </div>
            <Link to="/store"> <button className="text-green-200 text-xl mb-20 font-serif text-center bg-emerald-400 w-full font-semibold px-2 py-1 hover:bg-yellow-400 rounded-md">Show all</button></Link>
        </div>
    );
};

export default Featured;