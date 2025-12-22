import { supabase } from "../lib/SupabaseClient"

export const useDailyCheckIn = () => {
  const claimReward = async (userId: string) => {
    await supabase.rpc('increment_points', { user_id: userId, amount: 5 })  //calls RPC and increments users points by 5

    const today = new Date().toISOString().split('T')[0] //converts date to Y-M-D format

    const { data: streak } = await supabase
      .from('daily_streaks')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (!streak) {
      await supabase.from('daily_streaks').insert({  //creates a new streak entry for the user
        user_id: userId,
        last_check_in: today,
        streak_count: 1,
      })
    } 
    else if (streak.last_check_in !== today) {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayStr = yesterday.toISOString().split('T')[0]

      const newStreak = streak.last_check_in === yesterdayStr ? streak.streak_count + 1 : 1

      await supabase.from('daily_streaks').update({ //
        last_check_in: today,
        streak_count: newStreak,
      }).eq('user_id', userId)
    }

    // Log reward action
    await supabase.from('reward_actions').insert({
      user_id: userId,
      type: 'daily_checkin',
      points_earned: 5,
    })
  }

  return { claimReward }
}
