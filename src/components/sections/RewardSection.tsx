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
    <section className="w-full overflow-hidden">
      <h2 className="text-lg md:text-2xl my-3 text-black border-l-4 border-[#9301fe] pl-3 font-semibold">
        Redeem Your Points
      </h2>

      <div
        className="
          pb-2 w-100 md:w-full h-13
          overflow-x-auto whitespace-nowrap
          hide-scrollbar
        "
      >      
        {tabs.map(tab => (
          <div
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`
              relative cursor-pointer
              h-full px-4 mx-2
              inline-block gap-2  border border-red-500
              hover:rounded-t-2xl
              whitespace-nowrap hover:bg-purple-50
              transition-colors duration-300
              ${
                filter === tab.key
                  ? "text-[#9301fe] bg-purple-50 rounded-t-2xl"
                  : "text-gray-500 hover:text-gray-700"
               }        
              before:content-['']
              before:absolute
              before:left-0
              before:-bottom-1
              before:h-0.75
              before:w-full
              before:bg-[#9301fe]
              before:rounded-full
              before:origin-left
              before:transition-transform
              before:duration-300
               ${
                 filter === tab.key
                   ? "before:scale-x-100"
                   : "before:scale-x-0"
               }
            `}
          >
            <div className="flex items-center justify-center h-full gap-4">
              {tab.label}
              <span className={`text-sm rounded-full flex items-center justify-center w-5 h-5
                  ${filter === tab.key ? "bg-purple-200 text-purple-700" : "bg-gray-200 text-gray-500"}
                `}>
                {rewardCounts[tab.key]}
              </span>

            </div>
          </div>
        ))}

      </div>

      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6 ">
        {filteredRewards.map(reward => (
          <RewardCard key={reward.id} reward={reward} />
        ))}
      </div>
    </section>
  );
};
export default RewardSection;