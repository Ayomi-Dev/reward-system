import { useAuth } from "../context/AuthContext"
import { signOut } from "../lib/auth"
export const RewardPage = () => {
    const { user } = useAuth();
    console.log(user)
  return (
    <div>
        <h1>Rewards Page</h1>
        <h2>Welcome, {user?.user_metadata.name}</h2>
        <button onClick={signOut}>Log out</button>
    </div>
  )
}
