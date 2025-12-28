import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/SupabaseClient";
import { useAuth } from "../context/AuthContext";
import type { RewardFilter, RewardProps } from "../types";



export const useRewards = () => {
  const { user } = useAuth();
  const [rewards, setRewards] = useState<RewardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<RewardFilter>("all");

  const fetchRewards = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("rewards")
      .select("*")
      .order("icon", {ascending: false})

    if (error) {
      console.error("Error fetching rewards:", error.message);
      setLoading(false);
      return;
    }

    setRewards((data as RewardProps[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    if (user) fetchRewards();
  }, [user]);


  const filteredRewards = useMemo(() => {//filters rewards based on status and returns the data for the selected tab/filter
    switch (filter) {
      case "unlocked":
        return rewards.filter(reward => reward.status === "unlocked");
      case "locked":
        return rewards.filter(reward => reward.status === "locked");
      case "coming-soon":
        return rewards.filter(reward => reward.status === "coming_soon");
      default:
        return rewards;
    }
  }, [rewards, filter]);

  const rewardCounts = useMemo(() => { //returns the length/counts of all rewards that matches the corresponding status on each reward tabs
  return {
    all: rewards.length,
    unlocked: rewards.filter(r => r.status === "unlocked").length,
    locked: rewards.filter(r => r.status === "locked").length,
    "coming-soon": rewards.filter(r => r.status === "coming_soon").length,
  };
}, [rewards]);


const redeemReward = async (rewardId: string) => { //changes the state of an unlocked reward to redeemed/claimed
  const { error } = await supabase
    .from('user_rewards')
    .update({
      status: 'redeemed',
      redeemed_at: new Date().toISOString(),
    })
    .eq('reward_id', rewardId)
    .eq('user_id', user.id)

  if (error) {
    console.error('Redeem failed:', error.message)
    return
  }

  await fetchRewards()
}



  return {
    rewards,
    filteredRewards,
    loading,
    filter,
    setFilter, 
    refetch: fetchRewards,
    rewardCounts,
    redeemReward
  };
};