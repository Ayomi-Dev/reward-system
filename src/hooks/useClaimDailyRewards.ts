import { useState } from "react";
import { supabase } from "../lib/SupabaseClient"
import { useProfile } from "../context/ProfileContext";

export const useDailyCheckIn = () => {
  const { refetchProfile } = useProfile(); 
  const [loading, setLoading] = useState(false)
  const claimDailyReward = async () => {
    setLoading(true)
    const { error } = await supabase.rpc('check_in_daily_streak')

    if (error) {
      console.error('Check-in failed:', error.message)
      setLoading(false)
      return
    }

  // Refetches user profile so UI updates
    await refetchProfile();
    setLoading(false)
    
}


  return { claimDailyReward, loading }
}
