import { useEffect, useState } from "react";
import SideBar from "./components/SideBar"
import { useAuth } from "./context/AuthContext"
import { RewardPage } from "./pages/RewardPage"
import AuthForm from "./components/AuthForm";

function App() {

  const { user, loading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => { //Locks body scroll when sidebar opens
  
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } 
    else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);


  if (loading) return <p>Loading...</p>



  return(
    <div className="flex flex-col relative md:flex-row min-h-screen w-full">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    

      {user ? 
        <div className="flex w-full relative min-h-screen">
          <SideBar isSidebarOpen={isSidebarOpen} toggleSideBar={toggleSideBar} />
          <RewardPage toggleSideBar={toggleSideBar} />
        </div>
       : 
        <AuthForm />}
      
    </div>
  )
  

}

export default App
