import { Link } from "react-router-dom";


const Showfeaturesdata = ({ data }) => {
    const { id, description, title, category, img, price } = data
    return (
        <div >

            <div className="card  h-full bg-base-100 shadow-xl">
                <figure><img className="mt-4" src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p> {description}</p>
                    <div className="card-actions items-center justify-between">
                        <p className="text-lg font-semibold">Price: {price}</p>

                        <Link to="/login"><button className=" px-2 py-1  rounded-md btn btn-outline btn-secondary">Buy Now</button></Link>
                    </div>
                    <Link to={`/feature/${id}`}>
                        <button className="btn w-full btn-active btn-success mt-6">Details</button>
                        </Link>
                </div>

            </div>

        </div>
    );
};

export default Showfeaturesdata;