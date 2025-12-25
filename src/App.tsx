import { AuthForm } from "./components/AuthForm"
import SideBar from "./components/SideBar"
import { useAuth } from "./context/AuthContext"
import { RewardPage } from "./pages/RewardPage"

function App() {

  const { user, loading } = useAuth()
  if (loading) return <p>Loading...</p>



  return(
    <div className="flex flex-col md:flex-row min-h-screen lg:h-screen lg:md:overflow-hidden w-full">
      <SideBar />
      {user ? <RewardPage /> : <AuthForm />}
    </div>
  )
  

}

export default App
