import { SlBasket } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";

const Nav = () => {
    return (
      <div className=" ">
         <p className="bg-black text-white text-center">Sign up and get 20% off to your first order. Sign Up Now</p>

        <div className="flex justify-center">

            <h2 className="text-3xl font-bold ">SHOP.CO</h2>
            <ul className="flex gap-10 my-2">
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            </ul>
                <input className="bg-gray-300 w-1/3 h-10 rounded " type="Search for products..." name="" id="" />

                <div className="flex my-2 gap-3">

                <SlBasket />
                <FaRegUserCircle />
                </div>
        </div>

        <div className="bg-[#F2F0F1]">
            <h2 className="mt-20 text-6xl w-1/3">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
            <p className="w-1/2">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <input className="bg-black" type="text" />
        </div>

        <div className="flex gap-5">

            <div className="">
                <h2 className="text-black">200+</h2>
                <p>International Brands</p>
            </div>

            <div className="">
                <h2 className="text-black">2000+</h2>
                <p>High-Quality Products</p>
            </div>

            <div className="">
                <h2 className="text-black">30,000++</h2>
                <p>Happy Customers</p>
            </div>



        </div>
        <div className="bg-black h-2xl">
            <h2 className="text-white text-3xl p-5">VERSACE</h2>
            
        </div>

      </div>
    )
  }
  
  export default Nav