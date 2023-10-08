import { Link } from "react-router-dom";


const Showfeaturesdata = ({ data }) => {
    const { id, description, title, category, img, price } = data
    return (
        <div >

            <div className="card w-72 h-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p> {description}</p>
                    <div className="card-actions items-center justify-between">
                    <p className="text-lg">Price: {price}</p>
                    
                       <Link to="/login"><button className=" px-2 py-1  rounded-md btn btn-outline btn-secondary">Buy Now</button></Link> 
                    </div>
                    <button className="btn btn-active btn-success mt-6">Details</button>
                </div>
                
            </div>
            
        </div>
    );
};

export default Showfeaturesdata;