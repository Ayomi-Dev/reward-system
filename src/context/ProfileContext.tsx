import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/SupabaseClient'
import { useAuth } from './AuthContext'

type ProfileContextType = {
  profile: any | null
  loading: boolean
  refetchProfile: () => Promise<void>
}

const ProfileContext = createContext<ProfileContextType | null>(null)

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth()
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const fetchProfile = async () => {
    if (!user) return  //if no user is signed in, exits the function

    setLoading(true)
    const { data, error } = await supabase
      .from('profiles') //queries supabase db and fetches the profile data for the signed in user
      .select('*')
      .eq('id', user.id) //filters the list of profiles in the db and returns the one that matches the id of the signed in user
      .single()

    if (!error) setProfile(data)
    setLoading(false)
  }

  useEffect(() => { //reruns the fetchprofile function and updates the profile whenever the user state changes
    if (user) {
      fetchProfile()
    } else {
      setProfile(null) // logout cleanup
    }
  }, [user])

  return (
    <ProfileContext.Provider
      value={{ profile, loading, refetchProfile: fetchProfile }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const context = useContext(ProfileContext)
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider')
  }
  return context
}
