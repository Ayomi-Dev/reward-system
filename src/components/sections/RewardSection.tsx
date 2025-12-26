import { useRewards } from "../../hooks/useRewards";
import RewardCard from "../cards/RewardCard";

const RewardSection = () => {
  const { filteredRewards, filter, setFilter, loading } = useRewards();

  return (
    <section>
      <h2 className="text-lg md:text-2xl my-3 text-black border-l-4 border-[#9301fe] pl-3 font-semibold">
        Redeem Your Points
      </h2>

      <div className="flex items-center gap-4 pb-4">
        {["all-rewards", "unlocked", "locked", "coming-soon"].map(tab => (
          <span
            key={tab}
            onClick={() => setFilter(tab as any)}
            className={`py-3 px-4 rounded-t-xl cursor-pointer transition-all ${
              filter === tab
                ? "text-[#9301fe] bg-purple-50 border-b-3 border-[#9301fe]"
                : "text-gray-500"
            }`}
          >
            {/* capitalizes the first letter of each word */}
            {tab.replace("-", " ").split(" ").map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(" ")} 
          </span>
        ))}
      </div>

      {loading && <p>Loading rewards...</p>}

      {!loading && filteredRewards.length === 0 && (
        <p className="text-gray-500 mt-6">
          No rewards yet.
        </p>
      )}

      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6">
        {filteredRewards.map(reward => (
          <RewardCard key={reward.id} reward={reward} />
        ))}
      </div>
    </section>
  );
};
export default RewardSection;