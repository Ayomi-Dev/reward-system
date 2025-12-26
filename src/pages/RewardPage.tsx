import { useState } from "react";
import { ReferEarnCard } from "../components/ReferEarnCard";
import { ReferWinCard } from "../components/ReferWinCard";
import { ShareStackCard } from "../components/ShareStackCard";
import SocialIcons from "../components/SocialIcons";
import TopBar from "../components/TopBar";
import RewardSection from "../components/rewards/redeem-rewards/RewardSection";
import EarnPointsSection from "../components/rewards/earn-points/EarnPointsSection";

 
export const RewardPage = () => {
    const [tab, setTab] = useState<"earn" | "redeem">("earn");

    const handleTabClick = (selectedTab: "earn" | "redeem") => {
        setTab(selectedTab)
    }

  return (
    <main className="w-full relative bg-gray-50 px-4 lg:px-8 min-h-screen grow md:overflow-y-auto lg:min-h-0">
        <TopBar />
        <div className="flex items-center gap-4 pb-4">
            <span className={`${ tab === "earn" ? "text-[#9301fe] bg-purple-50 border-b-3 border-[#9301fe]" : "text-gray-500" } py-3 px-4 rounded-t-xl cursor-pointer transition-all duration-400`}
             onClick={() => handleTabClick("earn")}
            >
                Earn Points
            </span>
            <span className={`${ tab === "redeem" ? "text-[#9301fe] bg-purple-50 border-b-3 border-[#9301fe]" : "text-gray-500" } py-3 px-4 rounded-t-xl cursor-pointer transition-all duration-400`}
                onClick={() => handleTabClick("redeem")}
            >
                Redeem Rewards
            </span>
        </div>
        

        { tab === "redeem" ? <RewardSection /> : tab === "earn" && <EarnPointsSection />}
        
        <section>
            <div className="mt-10">
                <h2 className="text-lg md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">
                    Earn More Points
                </h2> 

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ReferWinCard />
                  <ShareStackCard />
                </div>
            </div>

        </section>

        <section className="space-y-6">
            <h2 className="text-lg md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">Refer &amp; Earn</h2>
            <div className="shadow-[0_5px_15px_rgba(0,0,0,0.05)] rounded-2xl hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
                <ReferEarnCard />
                <SocialIcons />
            </div>
        </section>

    </main>
  )
}
