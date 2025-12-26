import { useRewards } from "../../hooks/useRewards";
import RewardCard from "../cards/RewardCard";

const RewardSection = () => {
  const { filteredRewards, filter, setFilter, rewardCounts } = useRewards();
  const tabs: { key: typeof filter; label: string }[] = [ //transforms filter keys/values into user-friendly labels for tab display
    { key: "all", label: "All Rewards" },
    { key: "unlocked", label: "Unlocked" },
    { key: "locked", label: "Locked" },
    { key: "coming-soon", label: "Coming Soon" },
  ];

  return (
    <section className="w-full">
      <h2 className="text-lg md:text-2xl my-3 text-black border-l-4 border-[#9301fe] pl-3 font-semibold">
        Redeem Your Points
      </h2>

      <div className="flex items-center gap-4 pb-4">
      {tabs.map(tab => (
        <div 
          key={tab.key}
           className={`cursor-pointer px-4 py-3 rounded-t-xl flex gap-2 ${
            filter === tab.key
            ? "text-[#9301fe] bg-purple-50 border-b-3 border-[#9301fe]"
            : "text-gray-500"
          }`}
          onClick={() => setFilter(tab.key)}
         
        >
          <span>
            {tab.label}
          </span>
          <span className={`text-xs rounded-full w-5 h-5 flex justify-center items-center bg-[#9031fe]/10 font-semibold 
            ${tab.key !== filter ? "bg-gray-100 text-gray-300": ""}`
          }>
            {rewardCounts[tab.key]}
          </span>
        </div>
      ))}
      </div>

      <div className="grid gap-6 w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-6 items-stretch ">
        {filteredRewards.map(reward => (
          <RewardCard key={reward.id} reward={reward} />
        ))}
      </div>
    </section>
  );
};
export default RewardSection;