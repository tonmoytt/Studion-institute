import { Link } from "react-router-dom";



const CourseShow = ({ propsData }) => {
    const { title, img, category, price, description } = propsData;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className="mt-4" src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p> {description}</p>
                    <div className="card-actions items-center justify-between">
                        <p className="text-lg font-semibold">Price: {price}</p>

                        <Link to="/login"><button className=" px-2 py-1 rounded-md btn btn-outline btn-success">Buy Now</button></Link>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default CourseShow;