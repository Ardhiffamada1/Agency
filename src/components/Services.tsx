import logo1 from '../assets/image/UI.svg'
import logo2 from '../assets/image/Web.svg'
import logo3 from '../assets/image/Brand Identity.svg'
import logo4 from '../assets/image/Marketing.svg'

const Service = () =>{
 return(
    <div className="lg:p-36 flex flex-row justify-around gap-8" >
    <div>
    <span className="text-yellow-500 font-bold">Our Services</span>
    <h1 className="pt-6 font-bold text-4xl tracking-tight">
        We Create Best
        <br />Digital Products
    </h1>
    <p className="lg:pt-4 text-sm">
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    <br /> Velit officia consequat duis enim velit mollit.
    <br /> Exercitation veniam consequat sunt nostrud amet.
    </p>
    <div className="pt-20 flex flex-row justify-arround gap-4">
        <button className="text-sm bg-yellow-400 p-4 rounded-lg">Contact Us</button>   
    </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
    <div className="max-w-md mx-auto mt-10 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <img className='m-4' src={logo1} width={70} alt="" />
    <div className="p-4">
      <h2 className="m-3 text-xl font-bold mb-2">UX / UI Design</h2>
      <p className="m-3 text-gray-700">Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..</p>
    </div>
    </div>
    <div className="max-w-md mx-auto mt-10 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
    <img className='m-4' src={logo2} width={70} alt="" />
    <div className="p-4">
      <h2 className="m-3 text-xl font-bold mb-2">Web Developer</h2>
      <p className="m-3 text-gray-700">Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    </div>
    <div className="max-w-md mx-auto mt-10 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
    <img className='m-4' src={logo4} width={70} alt="" />
    <div className="p-4">
      <h2 className="m-3 text-xl font-bold mb-2">Marketing & SEO</h2>
      <p className="m-3 text-gray-700">Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    </div>
    <div className="max-w-md mx-auto mt-10 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
    <img className='m-4' src={logo3} width={70} alt="" />
    <div className="p-4">
      <h2 className="m-3 text-xl font-bold mb-2">Brand Identity</h2>
      <p className="m-3 text-gray-700">Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    </div>
    </div>
  </div>
 )
}


export default Service;