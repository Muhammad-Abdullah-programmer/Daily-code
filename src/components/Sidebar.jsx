import { CiUser, RxDashboard, AiOutlineShop, IoFastFood,LuPhoneCall  } from "../assets/Icons.jsx";


export default function Sidebar({shwslide,setshwslide}){

     

    return(

       
        <>
        <aside className={` ${shwslide ? "block" : "hidden"} w-[80%]  md:w-[30%] h-[100vh] overflow-hidden bg-[#ffffff] z-50 shadow-[0_10px_30px_rgba(59,130,246,0.35)] absolute top-0`}>

{/* First Child  */}
<div className="first-child flex flex-col  items-start pl-6 py-7">
    {/* logo  */}
    <div className="logo flex gap-2 justify-start">
<CiUser className="bg-[#fedc00] text-7xl rounded-full text-black text-center p-2 font-extrabold"/>

{/* .text  */}
<div className="text flex flex-col justify-center">
    <p className="text-sm text-[#000000]">Login to Explore</p>
    <p className="font-bold text-md">World of Flavors</p>
</div>
    </div>

    <button className=" mt-8 border-2 rounded-2xl bg-transparent px-6 py-2 font-semibold hover:bg-[#f15b25] hover:text-white hover:border-black">Login</button>
    <hr className="w-[80%] text-center mt-4 text-gray-400"/>
</div>

{/* Second Child  */}
<div className="second-child flex flex-col items-start py-4">
    <div className="first-icon flex flex-col gap-6 pl-6">
         <h4 className="flex items-center gap-4 font-bold text-base"><RxDashboard className="text-2xl"/> Explore Menue</h4>
         <h4 className="flex items-center gap-4 font-bold text-base"><AiOutlineShop  className="text-2xl"/> Explore Menue</h4>
    </div>

        <hr className="w-[80%] text-center mt-4 text-gray-400 ml-5"/>

</div>

{/* Third Child  */}
<div className="third-child flex flex-col justify-between  items-start ">
<div className="text flex flex-col gap-4 pl-6">
    <span className="text-base font-semibold">Blog</span>
    <span className="text-base font-semibold">Privacy Policy</span>
</div>

{/* Contact  */}
<div className="contact bg-[#fedc00] flex justify-center gap-4 items-center w-[100%] mt-67 md:mt-20 py-4 ">
    <IoFastFood/> <span>Cheezious Hotline</span>

    <span className="text-center bg-black rounded-full p-2 ">
<LuPhoneCall className="text-[#fedc00]"/>
    </span>
</div>

</div>

        </aside>
        </>
    )
}