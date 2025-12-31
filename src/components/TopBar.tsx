import { Bell, MenuIcon } from "lucide-react"

const TopBar = ({toggleSideBar}: {toggleSideBar: () => void}) => {
  return (
    <section className="sticky top-0 z-10 bg-gray-50 pb-2 flex py-2 pt-10">
        <div className="flex justify-between items-center w-full">
            <div className="block">
                <div className="flex items-center gap-3">
                    <button className="lg:hidden" onClick={toggleSideBar}>
                        <MenuIcon className="w-7 h-7" /> 
                    </button>
                    <h1 className="text-xl md:text-[1.5rem] font-medium ">Rewards Hub</h1>
                </div>
                <p className="text-gray-600 py-3 hidden md:block">Earn points, unlock rewards, and celebrate your progress!</p>
            </div>
            <div className="relative rounded-full w-9 h-9 bg-gray-200 hover:bg-gray-300 flex items-center cursor-pointer justify-center">
                <button className="relative cursor-pointer">
                    <Bell className="w-4 h-4 text-black fill-current hover:text-[#930ef1] stroke-current" />
                    <span className="absolute text-white text-xs -top-3.5 rounded-full flex items-center justify-center bg-red-500 w-4 h-4 -right-1.5 ">1</span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default TopBar