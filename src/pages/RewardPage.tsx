import { useAuth } from "../context/AuthContext"
import { signOut } from "../lib/auth"
export const RewardPage = () => {
    const { user } = useAuth();
  return (
    <div>
        <h1 className="bg-black"> Rewards Page</h1>
        <h2>Welcome, {user?.user_metadata.name}</h2>
        <button onClick={signOut}>Log out</button>
    </div>
  )
}
