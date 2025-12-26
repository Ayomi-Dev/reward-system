import { useState } from "react";
import { supabase } from "../lib/SupabaseClient"
import { useProfile } from "../context/ProfileContext";

export const useDailyCheckIn = () => {
  const { refetchProfile } = useProfile(); 
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal]= useState(false);

  const claimDailyPoints = async () => {
    setLoading(true)
    const { error } = await supabase.rpc('check_in_daily_streak')

    if (error) {
      console.error('Check-in failed:', error.message)
      setLoading(false)
      return
    }

  // Refetches user profile so UI updates current state of points and streak
    await refetchProfile();
    setLoading(false)
    setShowSuccessModal(true) //pops up modal on successful check in
    
}


  return { claimDailyPoints, loading, showSuccessModal, setShowSuccessModal }
}
