import { Link } from "react-router-dom";

const ShowMainStored = ({ propsData }) => {
    const { title, img, category, price, description } = propsData;

    // const hendelbtn = () => {
    //     console.log('btn clicked');
    // }
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className="mt-4" src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p> {description}</p>
                    <div className="card-actions items-center justify-between">
                        <p className="text-lg  font-semibold">Price: {price}</p>

                        <Link to="/login"><button className=" px-2 py-1 rounded-md btn btn-outline btn-secondary">Buy Now</button></Link>
                    </div>
                    {/* <Link >
                        <button onClick={hendelbtn} className="btn btn-active btn-success mt-6">Details</button></Link> */}
                </div>

            </div>
        </div>
    );
};

export default ShowMainStored;