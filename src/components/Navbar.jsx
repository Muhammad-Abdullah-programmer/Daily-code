import { RiMenu3Line, GiFullPizza, FaCartArrowDown, CiUser,CiSearch, RiSendPlaneFill,FaGreaterThan } from "../assets/Icons.jsx";

export default function Navbar({shwslide,setshwslide}) {


const handleSlidebar = ()=>{
            
        setshwslide(true)
        }

  return (
    <>
      <nav className="">

        {/* mobile navbar  */}
    <div className="mobile-nav md:hidden flex justify-between px-4 py-4 text-[#EF5B23] text-xl md:text-3xl ">
          {/* Icon  */}
        <div className="icon">
          <RiMenu3Line onClick={handleSlidebar} />
        </div>

        {/* logo  */}
        <div className="logo flex items-center gap-1">
          <GiFullPizza /> <h1>Cheezious</h1>
        </div>

        {/* icons  */}
        <div className="icons flex gap-4">
         <FaCartArrowDown/>
         <CiUser/>
        </div>
    </div>

    {/* Desktop Nav  */}
    <div className="desk-nav hidden md:block md:flex justify-between items-center w-full  py-4 px-4 w-[90%] mx-auto ">
      {/* Logo  */}
      <div className="logo flex items-center gap-4">
        <RiMenu3Line className=" text-[#EF5B23] text-3xl font-bold  "  onClick={handleSlidebar} />
        <div className="pizza flex items-center gap-1">
          <GiFullPizza className="text-[#BA801D] text-3xl font-extrabold "/> <h1 className="text-[#422415] font-bold text-2xl">Cheezious</h1>
        </div>
      </div>

      {/* Search Bar  */}
      <div className="searchbar relative bg-amber-400 w-[50%]">
        <input type="text" placeholder="Find in Cheezious" className="outline-none p-2 pl-8 bg-[#F8F8F8] w-[100%] rounded " />
        <CiSearch className="absolute top-3 left-1 text-[#CCCCCC] font-bold "/>
      </div>

      {/* Message  */}
     

      {/* Buttons  */}
      <div className="btns flex  items-center gap-6">

         <div className="message relative">
        <RiSendPlaneFill className="absolute top-3 left-1 text-[#CCCCCC]"/>
        <input type="text" placeholder="Enter the Delivery" className="bg-[#FFFFFF] outline-none pl-8 py-2 rounded border  border-gray-400 " />
        <FaGreaterThan className="absolute top-3 right-1 text-[#CCCCCC] font-bold"/>
      </div>

        <button className="flex items-center px-3 py-2 rounded-md bg-[#FEDC00] gap-2 font-bold relative "><FaCartArrowDown className="font-bold "/>Cart</button>
        <span className="absolute right-28 top-3 rounded-[100%] flex justify-center items-center  border-3 border-white bg-red-700 text-white  w-4 h-5 px-2 py-3 ">0</span>
        <button className="flex items-center px-3 py-2 rounded-md bg-[#FEDC00] gap-2 font-bold "><CiUser className="font-bold"/>Login</button>
      </div>
    </div>
      </nav>
    </>
  );
}
