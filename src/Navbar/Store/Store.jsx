import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ShowMainStored from "./ShowMainStored";


const Store = () => {
    const [store, setstore] = useState();
    useEffect(() => {
        fetch('/storemain.json')
            .then(res => res.json())    
            .then(data => setstore(data));
            // .then(data => console.log(data));
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-4xl text-rose-500   mt-10 font-serif font-semibold text-center"><span className="bg-teal-300 px-4 py-2 rounded-md">All Course here</span></h1>
            <br />
            <hr className="bg-red-400 mx-96" />
            <hr className="bg-red-400 mx-96" />
            <hr className="bg-red-400 mx-96" />
            <hr className="bg-red-400 mx-96" />
            <hr className="bg-red-400 mx-96" />
            <hr className="bg-red-400 mx-96" />
            <hr className="bg-red-400 mx-96" />
            

            <div className="grid md:grid-cols-2 gap-8 pt-6 mt-10 bg-sky-200 lg:grid-cols-3">
            {
                store?.map(data2 => <ShowMainStored key={data2.id} propsData={data2}></ShowMainStored>)

            }
            </div>
        </div>
    );
};

export default Store;