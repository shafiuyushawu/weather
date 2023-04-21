import { Link } from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';

const Navbar = () => (
  <nav className="navbar bg-[#4b7bec] text-white">
    <div className="navbar-start">
      <Link className="btn btn-ghost normal-case text-xl" to="/"><IoChevronBackSharp className="inline text-3xl mr-4" /></Link>
    </div>
    <div className="navbar-center">
      Weather Forecast
    </div>
    <div className="navbar-end">
      <BiMicrophone className="text-2xl mr-4" />
      <AiFillSetting className="text-white text-2xl mr-4" />
    </div>
  </nav>
);

export default Navbar;
