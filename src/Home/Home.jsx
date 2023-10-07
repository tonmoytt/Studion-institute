import { useLoaderData } from "react-router-dom";
import Bg from "../Navbar/Bg/Bg";
import Navbar from "../Navbar/Navbar";
import Slider from "../Navbar/Slider/Slider";
import Footer from "../marque/Footer/Footer";
import Marque from "../marque/marque";
import Courseregistetion from "./Courseregistetion/Courseregistetion";
import Featured from "./Featured/Featured";



const Home = () => {
    return (
        
        <div>
        

            <div className="bg-blue-500 mb-4">
                <h1 className="text-center py-2 text-xl text-white font-serif">Take one option,make life esey <span><button className="text-xl rounded-xl bg-red-400 p-2">Learn more</button></span></h1>
            </div>
            <h1 className="text-2xl font-mono">  <span></span></h1>
            <Navbar></Navbar>
            <Bg></Bg>
            <Featured></Featured>
            <Marque></Marque>
            <Courseregistetion></Courseregistetion>
            <Slider></Slider>
            <Footer></Footer>
        </div>
    );
};

export default Home;