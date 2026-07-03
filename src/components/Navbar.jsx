import { RiMenu3Line, GiFullPizza,HiOutlineShoppingBag, FaCartArrowDown, CiUser,CiSearch, RiSendPlaneFill,FaGreaterThan,RxCross2 } from "../assets/Icons.jsx";
import googleMap from  './GoogleMapTA.webp'

export default function Navbar({shwslide,setshwslide,freepop,setfreepop,openpup,setopenpup}) {


const handleSlidebar = ()=>{
            
        setshwslide(true)
        }

        // open free popup function 
        const openpopup = ()=>{

          setopenpup(true)
          setfreepop(false)
        }

        // Free input popup function 
        const freepophandl = ()=>{

          setfreepop(true)
        }

        // cart pupup div funstion 

       

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
      <div className="searchbar relative  w-[50%] flex justify-center">
        <input type="text" placeholder="Find in Cheezious" className="outline-none p-2 pl-8 bg-[#F8F8F8] w-[80%] rounded " />
        <CiSearch className="absolute top-3 left-1 text-[#CCCCCC] font-bold "/>

        {/* Search pop up  */}
        <div className={` ${freepop ? "hidden" : "block"} ${openpup ? "block" : "hidden"} px-4 pt-4 search-popup absolute top-20 -right-55 w-[90%] min-h-[50vh] bg-[#ffff] z-50 shadow-2xl`}>
<div className="tex relative">
  <span className="text-3xl font-bold tracking-wider">Enter Address</span>
  <p className="tracking-wide text-[#8C8C8C] ">Please allow location for free delivery and good food experience</p>

  {/* cross  */}
  <span className="bg-[#ef5b23] hover:bg-white hover:text-[#ef5b23] rounded-full text-white font-bold p-2 text-center absolute top-2 right-3 ">

    <RxCross2 className="text-md" onClick={freepophandl}/>
  </span>
  
</div>

{/* Map div  */}
<div className="map-div mt-4">
<img src={googleMap} alt="" className="w-[100%] object-cover h-50" />
</div>
        </div>
      </div>

      {/* Message  */}
     

      {/* Buttons  */}
      <div className="btns flex  items-center gap-6">

         <div className="message relative" onClick={openpopup}>
        <RiSendPlaneFill className="absolute top-3 left-1 text-[#CCCCCC]"/>
        <input type="text" placeholder="Enter the Delivery" className="bg-[#FFFFFF] outline-none pl-8 py-2 rounded border  border-gray-400 " />
        <FaGreaterThan className="absolute top-3 right-1 text-[#CCCCCC] font-bold"/>
      </div>

        
        <button className="flex items-center px-3 py-2 rounded-md bg-[#FEDC00] hover:bg-[#8c8c8c] gap-2 font-bold "><CiUser className="font-bold"/>Login</button>

        <div className="relative group inline-block">
  
  <button className="flex items-center px-3 py-2 rounded-md bg-[#FEDC00] hover:bg-[#8c8c8c] gap-2 font-bold">
    <FaCartArrowDown className="font-bold" />
    Cart
  </button>

  {/* cart popup */}
  <div className="hidden group-hover:flex py-4 rounded-2xl px-4 bg-white border-2 border-white shadow-lg hover:shadow-2xl z-50 absolute top-12 right-10 flex-col justify-center items-center min-w-90 min-h-60">
    <HiOutlineShoppingBag className="text-9xl text-gray-400" />
    <p className="text-lg font-bold tracking-wider uppercase">your cart is empty</p>
    <span>go ahead and explore top categories</span>
  </div>

</div>

      
      </div>
    </div>
      </nav>
    </>
  );
}
