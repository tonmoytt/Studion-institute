// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Showfeaturesdata from "./showfeaturesdata";



const Featured = () => {
    const news = useLoaderData();
    console.log(news);

    return (
        <div>
            <h1 className="text-xl ml-10 md:40 lg:ml-60">Featured Categories : <Link to="/store"> <button className="text-green-400 font-serif font-semibold px-2 py- rounded-md">Show all</button></Link></h1>

            {
              news.data.map(data => <Showfeaturesdata key={data.id} data={data}> </Showfeaturesdata>)
            }
        </div>
    );
};

export default Featured;