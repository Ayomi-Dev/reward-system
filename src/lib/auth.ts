import { supabase } from "./SupabaseClient"

export const signUp = async (email: string, password: string, confirmPassword: string) => { //creates a new user
  const {data, error} = await supabase.auth.signUp({ 
    email, 
    password, 
    options: 
        { 
            data: { confirmPassword } 
        } 
    })

    if (error) {
      console.error("Signup error:", error.message);
      throw error;
    }

    return {data, error};
}

export const signIn = async (email: string, password: string) => { //signs in existing user
  const {data, error} = await supabase.auth.signInWithPassword({ email, password })
  
  return {data, error}
}

export const signOut = async () => { //logs out user
  return supabase.auth.signOut()
}
