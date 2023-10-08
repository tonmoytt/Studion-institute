 
import { Link } from 'react-router-dom';

const Bg = () => {
    return (
        <div className='mb-16  '>
            <hr className='w-full mb-2 bg-red-600 text-red-600' />
            <hr className='w-full mb-2 text-red-600' />
            <hr className='w-full mb-2 text-red-600' />
            <div className="hero min-h-screen h-96 mb-16" style={{ backgroundImage: 'url( https://i.ibb.co/gT3GVWV/9999.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-2xl md:text-4xl lg:text-4xl font-serif font-semibold mb-10">Buying <span className="text-green-600 font-extrabold ">Course,"Learn <br />   best &  earn   </span> best"
                        </h1>
                        <p className="mb-5">If you want to improved yourself with <br /> less effort in less time then these courses are just for you.</p>
                        <Link to="/login"><button className="btn btn-success">Join Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bg;