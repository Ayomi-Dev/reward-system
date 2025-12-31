import { signOut } from '../../lib/auth'

const ProfileModal = () => {
    const signOutUser = async () => {
        await signOut()
    }
  return (
    <div className="absolute bottom-16 left-4 right-4 z-50 bg-white rounded-xl shadow-lg border border-black/10 overflow-hidden animate-in fade-in zoom-in-95">
        <ul className="py-2">
          <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
            Feedback
          </li>
          <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
            Support
          </li>
          <li className="px-4 py-2 text-sm cursor-pointer text-red-600 hover:bg-red-50" onClick={signOutUser}>
            Logout
          </li>
        </ul>
      </div>
  )
}

export default ProfileModal