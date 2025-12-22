import { useState, useEffect } from 'react'
import { supabase } from '../lib/SupabaseClient'

export const useProfile = () =>{
  const [userProfile, setUserProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)


  const fetchUserProfile = async () => {
    const { data: userData, error: userError } = await supabase.auth.getUser(); //gets the data of the user currently logged in

    if (userError) {
        console.error("Auth error:", userError.message);
        return;
    }

    if (!userData.user) {
        console.log("No user found");
        return;
    }

    const { data, error } = await supabase
      .from("profiles")   //refers to the table name in the database
      .select("*")    //selects all the columns in the referred table
      .eq("id", userData.user.id) //filters users in the table by its id
      .single();  //returns a single object instead of an array
      
    if (error) {
       console.error("Error fetching profile:", error.message);
       return;
    }      

    setUserProfile(data);
    setLoading(false)
  };


  useEffect(() => {
    fetchUserProfile()
  }, [])

  return { userProfile, loading }
}
