import  { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logos from '../assets/695509_medical_512x512.png'
import { AuthContext } from '../Pages/Firebase/Authprobider';
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const {user,logOut} = useContext(AuthContext)
  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/">
            <div className='flex gap-2 items-center'>
            <img className="h-11 w-11 mt-2" src={logos} alt="Logo" />
            <p className='text-1xl text-white'>weight loss school</p>
            </div>
            </NavLink>
          </div>
          <div className="flex">
            <div className="sm:hidden">
              <button
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className={`hidden sm:flex  items-center gap-4 ${isMenuOpen ? '' : 'hidden'}`}>
             <NavLink to="/" className={({ isActive}) =>
              isActive ? "text-blue-600" : "text-white"}>
                Home
              </NavLink>
              
              <NavLink to="/instructors" className={({ isActive}) =>
              isActive ? "text-blue-600" : "text-white"}>
                Instructors
              </NavLink>
              <NavLink to="/classes" className={({ isActive}) =>
              isActive ? "text-blue-600" : "text-white"}>
                Classes
              </NavLink>
            
              {user ? (
                <>
                  <NavLink to="/dashboard" className={({ isActive}) =>
              isActive ? "text-blue-600" : "text-white"}>
                    Dashboard
                  </NavLink>
                  <div className="ml-4 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="User Profile" />
                      
                    </div>
                    <p onClick={()=>logOut()} className='text-white cursor-pointer'>LogOut</p>
                  </div>
                </>
              ) : (
                <NavLink to="/login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={` md:hidden  ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
          <NavLink to="/" className={({ isActive}) =>
              isActive ? "text-blue-600" : "text-white"}>
            Home
          </NavLink>
          <NavLink to="/instructors" className={({ isActive}) =>
              isActive ? "text-blue-600" : "text-white"}>
            Instructors
          </NavLink>
          <NavLink to="/classes" className={({ isActive}) =>
              isActive ? "text-blue-600" : "text-white"}>
            Classes
          </NavLink>
          {
            user&&(
              <div className='flex mr-20 items-center'>
                <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
              </div>
            )
          }
          {user ? (
            <>
            <NavLink to="/dashboard" className={({ isActive}) =>
            isActive ? "text-blue-600" : "text-white"}>
              Dashboard
            </NavLink>
            <p onClick={()=>logOut()} className='text-white cursor-pointer'>LogOut</p>
            </>
          ) : (
            <><NavLink to="/login" className={({ isActive}) =>
            isActive ? "text-blue-600" : "text-white"}>
              Login
            </NavLink>
            </>
          )}
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
