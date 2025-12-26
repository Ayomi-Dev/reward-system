import { useState } from "react";
import TopBar from "../components/TopBar";
import RewardSection from "../components/sections/RewardSection";
import EarnPointsSection from "../components/sections/EarnPointsSection";
import ReferralSection from "../components/sections/ReferralSection";
import EarnMorePointsSection from "../components/sections/EarnMorePointsSection";
import RewardSuccessModal from "../components/RewardSuccessModal";
import { useDailyCheckIn } from "../hooks/useClaimDailyRewards";
import ShareStackModal from "../components/modals/ShareStackModal";


export const RewardPage = () => {
    const [tab, setTab] = useState<"earn" | "redeem">("earn");
    const { showSuccessModal, claimDailyPoints, setShowSuccessModal} = useDailyCheckIn();

    const handleTabClick = (selectedTab: "earn" | "redeem") => {
        setTab(selectedTab)
    }
    const onCloseModal = ( ) => {
        setShowSuccessModal(false)
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
        
        { tab === "redeem" ? 
         <>
            <RewardSection /> 
         </> :
         tab === "earn" && 
            <>
                <EarnPointsSection checkIn={claimDailyPoints} />
                <EarnMorePointsSection />
                <ReferralSection />
            </>
        }
        


        { showSuccessModal && <RewardSuccessModal points={5} onCloseModal={onCloseModal} /> }

        <ShareStackModal />
    </main>
  )
}
