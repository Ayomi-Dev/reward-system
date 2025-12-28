import { useState } from "react";
import TopBar from "../components/TopBar";
import RewardSection from "../components/sections/RewardSection";
import EarnPointsSection from "../components/sections/EarnPointsSection";
import ReferralSection from "../components/sections/ReferralSection";
import EarnMorePointsSection from "../components/sections/EarnMorePointsSection";
import RewardSuccessModal from "../components/RewardSuccessModal";
import { useDailyCheckIn } from "../hooks/useClaimDailyRewards";
import ShareStackModal from "../components/modals/ShareStackModal";


export const RewardPage = ({ toggleSideBar} : { toggleSideBar: () => void}) => {
    const [tab, setTab] = useState<"earn" | "redeem">("earn");
    const { showSuccessModal, claimDailyPoints, setShowSuccessModal} = useDailyCheckIn();
    const [ showStackModal, setShowStackModal] = useState(false)

    const handleTabClick = (selectedTab: "earn" | "redeem") => {
        setTab(selectedTab)
    }
    const onCloseModal = () => {
        setShowSuccessModal(false)
    }
    const toggleStackShareModal = () => {
         setShowStackModal(!showStackModal)
    }

  return (
    <section className="relative bg-gray-50 flex-1 lg:ml-60">
        <TopBar  toggleSideBar={toggleSideBar}/>
        <div className="px-5 lg:px-8 overflow-hidden">
            <p className="text-gray-600 block md:hidden py-2">Earn points, unlock rewards, and celebrate your progress!</p>
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
            
                <RewardSection /> 
            :
            tab === "earn" && 
                <div className="block">
                    <EarnPointsSection checkIn={claimDailyPoints} />
                    <EarnMorePointsSection showStackModal={showStackModal} toggleStackShareModal={toggleStackShareModal} />
                    <ReferralSection />
                </div>
            }
            


            { showSuccessModal && <RewardSuccessModal points={5} onCloseModal={onCloseModal} /> }

            { showStackModal && <ShareStackModal toggleStackShareModal={toggleStackShareModal} />}

        </div>
    </section>
  )
}
