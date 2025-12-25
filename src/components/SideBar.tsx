import { Compass, CreditCard, HomeIcon, Library, SettingsIcon, SquareStackIcon, Stone,  } from 'lucide-react';
import Logo from '../assets/flowva_logo-xVpZI3-U.png';
const SideBar = () => {
  return (
    <aside className="w-72 hidden overflow-x-hidden md:flex flex-col h-screen bg-white shadow-md border-r border-black/10 text-black font-sans">
        <div className="flex flex-col h-full">
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
                        <Library className='w-4 h-4 text-black font-bold stroke-current' />
                        <span className="tracking-wide truncate">Library</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all text-black hover:bg-[rgba(144,19,254,0.1)] hover:text-[#9013FE]">
                        <SquareStackIcon className='w-4 h-4 text-black font-bold stroke-current' />
                        <span className="tracking-wide truncate">Tech Stack</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all text-black hover:bg-[rgba(144,19,254,0.1)] hover:text-[#9013FE]">
                        <CreditCard className='w-4 h-4 text-black  stroke-current' />
                        <span className="tracking-wide truncate">Subscriptions</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all bg-[rgba(144,19,254,0.2)] text-[#9013FE]">
                        <Stone className='w-4 h-4 text-black font-bold stroke-current' />
                        <span className="tracking-wide truncate">Rewards Hub</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all text-black hover:bg-[rgba(144,19,254,0.1)] hover:text-[#9013FE]">
                        <SettingsIcon className='w-4 h-4 text-black font-bold stroke-current' />
                        <span className="tracking-wide truncate">Settings</span>
                    </li>
                </ul>
            
            </nav>
            <div className="mt-auto py-3 relative flex justify-center">
                <div className="absolute top-0 left-4 right-4 border-t border-[#64748B]">
                </div>
                <div className="w-full flex items-center justify-between px-4">
                    <button className="flex items-center border-none">
                        <div className="w-10 h-10 relative overflow-hidden rounded-full font-semibold mr-3 flex items-center justify-center  text-[#9013FE] bg-[#E9D4FF]">
                            <img src="https://lh3.googleusercontent.com/a/ACg8ocJWQIppfHgr7DzPTups58ZiJ-ipXRTnzJnTWwHLBPcVedW0gQ=s96-c" alt="User avatar" className="h-full w-full rounded-full object-cover" />
                        </div>
                        <div className="text-start">
                            <span className="text-[0.9rem] font-semibold">Ayo</span>
                            <p className="text-[0.8rem] text-[#718096] truncate overflow-x-hidden max-w-38.25">
                                ayomideolakunlea1@gmail.com
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default SideBar