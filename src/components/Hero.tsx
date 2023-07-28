import image from "../assets/image/Header.svg"

const Hero = () =>{
 return(
    <div className="lg:p-36 flex justify-between" >
    <div>
    <span className="bg-yellow-400
    lg:px-4 lg:p-2 rounded-lg text-sm 
    font-semibold">Digital Manager</span>
    <h1 className="pt-6 font-bold text-4xl tracking-wide">
        Digital Products 
        <br />For Business
    </h1>
    <p className="lg:pt-4 text-sm">
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    <br /> Velit officia consequat duis enim velit mollit.
    <br /> Exercitation veniam consequat sunt nostrud amet.
    </p>
    <div className="pt-20 flex flex-row justify-arround gap-4">
        <button className="text-sm bg-yellow-400 p-4 rounded-lg">Get Started</button>   
        <button className="font-bold text-sm text-yellow-500 underline">Watch Video</button>
    </div>
    </div>
        <img src={image} className="w-96" alt="" />
    </div>
 )
}


export default Hero