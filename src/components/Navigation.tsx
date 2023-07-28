import Brand from "../assets/image/Brand.svg"

const Navigation = () => {
    return(
        <nav className="p-2">
            <div className="brand 
            flex 
            flex-row  
            justify-between
            lg:p-3 lg:m-2
            ">
            <img width={100} src={Brand} alt="" />
            <ul className="flex flex-row gap-8 text-sm">
                <li className="hover:text-yellow-400">
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <button className="bg-yellow-400 text-sm lg:p-3 rounded-md ">
                Get Started
            </button>
            </div>
            </nav>
    )
}

export default Navigation