import { RiMenu3Line, GiFullPizza, FaCartArrowDown, CiUser } from "../assets/Icons.jsx";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between px-4 py-4 text-[#EF5B23] text-base">
        {/* Icon  */}
        <div className="icon">
          <RiMenu3Line />
        </div>

        {/* logo  */}
        <div className="logo">
          <GiFullPizza />
        </div>

        {/* icons  */}
        <div className="icons flex gap-4">
         <FaCartArrowDown/>
         <CiUser/>
        </div>
      </nav>
    </>
  );
}
