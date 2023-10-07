import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authmainprovider } from "../provider/Provider";
import Navbar from "../../../Navbar/Navbar";

 

const Register = () => {
const {createUser}=useContext(Authmainprovider)
    const hendelregister=e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        // const password=e.target.password.value
        console.log(email,password);
        
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
        } )
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  ">
            <div className="text-center  ">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={hendelregister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                         
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                    <p className="my-4">Already have an account ? <Link to="/login"><button className="text-lg">Login</button></Link></p>
                </form>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Register;