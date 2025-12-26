import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/SupabaseClient";
import { useAuth } from "../context/AuthContext";

export type RewardStatus = "active" | "redeemed" | "coming_soon";

export type Reward = {
  id: string;
  title: string;
  points_required: number;
  status: RewardStatus;
};

export type RewardFilter = "all-rewards" | "unlocked" | "locked" | "coming-soon";

export const useRewards = () => {
  const { user } = useAuth();
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<RewardFilter>("all-rewards");

  const fetchRewards = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("rewards")
      .select("*")
      .order("points_required", { ascending: true });

    if (error) {
      console.error("Error fetching rewards:", error.message);
      setLoading(false);
      return;
    }

    setRewards((data as Reward[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    if (user) fetchRewards();
  }, [user]);


  const filteredRewards = useMemo(() => {//filters rewards based on status and returns the data for the selected tab/filter
    switch (filter) {
      case "unlocked":
        return rewards.filter(reward => reward.status === "redeemed");
      case "locked":
        return rewards.filter(reward => reward.status === "active");
      case "coming-soon":
        return rewards.filter(reward => reward.status === "coming_soon");
      default:
        return rewards;
    }
  }, [rewards, filter]);

  return {
    rewards,
    filteredRewards,
    loading,
    filter,
    setFilter, 
    refetch: fetchRewards,
  };
};