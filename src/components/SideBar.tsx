import { Compass, CreditCard, Gem, HomeIcon, Layers3,  PackageOpen, UserCog, X,  } from 'lucide-react';
import Logo from '../assets/flowva_logo-xVpZI3-U.png';
import { useState } from 'react';
import { signOut } from '../lib/auth';


const SideBar = ({isSidebarOpen, toggleSideBar }:
     {
        isSidebarOpen: boolean,
        toggleSideBar: () => void
    }) => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const signOutUser = async () => {
        await signOut()
    }

  return (
    <aside className={`
      fixed 
      top-0 left-0
      h-screen w-72 md:w-60
      bg-white shadow-md border-r border-black/10
      text-black font-sans
      transform transition-transform duration-300 ease-in-out
      z-50
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0
      flex overflow-auto
    `}
    >
        <div className="flex flex-col h-full relative">
            <button className="absolute top-2 md:hidden block -right-9" onClick={toggleSideBar}>
                <X className='w-6 h-6' />
            </button>
            <div className=" p-2 px-7 my-2 flex justify-start">
                <img src={Logo} alt="Flowva Logo" className="h-15" />
            </div>
            <nav className="grow px-4 "> 
                <ul>
                    <li className="flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all text-black hover:bg-[rgba(144,19,254,0.1)] hover:text-[#9013FE]">
                        <HomeIcon className='w-4 h-4 text-black font-bold stroke-current' />
                        <span className="tracking-wide truncate">Home</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all text-black hover:bg-[rgba(144,19,254,0.1)] hover:text-[#9013FE]">
                        <Compass className='w-4 h-4 text-black font-bold stroke-current' />
                        <span className="tracking-wide truncate">Discover</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all text-black hover:bg-[rgba(144,19,254,0.1)] hover:text-[#9013FE]">
                        <PackageOpen className='w-4 h-4 text-black font-bold stroke-current' />
                        <span className="tracking-wide truncate">Library</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all text-black hover:bg-[rgba(144,19,254,0.1)] hover:text-[#9013FE]">
                        <Layers3 className='w-4 h-4 text-black font-bold stroke-current' />
                        <span className="tracking-wide truncate">Tech Stack</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all text-black hover:bg-[rgba(144,19,254,0.1)] hover:text-[#9013FE]">
                        <CreditCard className='w-4 h-4 text-black  stroke-current' />
                        <span className="tracking-wide truncate">Subscriptions</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all bg-[rgba(144,19,254,0.2)] text-[#9013FE]">
                        <Gem className='w-4 h-4 text-black font-bold stroke-current' />
                        <span className="tracking-wide truncate">Rewards Hub</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all text-black hover:bg-[rgba(144,19,254,0.1)] hover:text-[#9013FE]">
                        <UserCog className='w-4 h-4 text-black font-bold stroke-current' />
                        <span className="tracking-wide truncate">Settings</span>
                    </li>
                </ul>
            
            </nav>
            <div className="mt-auto py-3 relative flex justify-center">
        <div className="absolute top-0 left-4 right-4 border-t border-[#64748B]" />

        <div className="w-full flex items-center justify-between px-4">
    <button
      onClick={() => setIsProfileOpen(prev => !prev)}
      className="flex items-center border-none cursor-pointer w-full"
    >
      <div className="w-10 h-10 relative overflow-hidden rounded-full mr-3 flex items-center justify-center bg-[#E9D4FF]">
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocJWQIppfHgr7DzPTups58ZiJ-ipXRTnzJnTWwHLBPcVedW0gQ=s96-c"
          alt="User avatar"
          className="h-full w-full rounded-full object-cover"
        />
      </div>

      <div className="text-start flex-1">
        <span className="text-[0.9rem] font-semibold">Ayo</span>
        <p className="text-[0.8rem] text-[#718096] truncate max-w-40">
          ayomideolakunlea1@gmail.com
        </p>
      </div>
    </button>
        </div>

        {isProfileOpen && (
      

      <div className="absolute bottom-16 left-4 right-4 z-50 bg-white rounded-xl shadow-lg border border-black/10 overflow-hidden animate-in fade-in zoom-in-95">
        <ul className="py-2">
          <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
            Feedback
          </li>
          <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
            Support
          </li>
          <li className="my-1 border-t border-gray-200" />
          <li className="px-4 py-2 text-sm cursor-pointer text-red-600 hover:bg-red-50" onClick={signOutUser}>
            Logout
          </li>
        </ul>
      </div>
        )}
        </div>

        </div>
    </aside>
  )
}

export default SideBar