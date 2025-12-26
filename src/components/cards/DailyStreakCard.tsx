import {  CalendarCheck, CloudLightningIcon } from "lucide-react";
import { useProfile } from "../../context/ProfileContext";
import { useDailyCheckIn } from "../../hooks/useClaimDailyRewards";


export function DailyStreakCard() {
  const days = ['M','T','W','T','F','S','S']
  const todayIndex = (new Date().getDay() + 6) % 7 // Monday = 0
  const today = new Date().toISOString().split('T')[0] //converts date to Y-M-D Format
  
 
  const { claimDailyReward, loading } = useDailyCheckIn();
  const { profile } = useProfile();
  const checkedInToday = profile?.last_checkin === today //controls button state to disable if user already checks in
  
  const handleDailyReward = () => {
    claimDailyReward();
  }

  return (
     <div className="bg-[#F7F8FC] border p-5 shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all 
        rounded-2xl hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] 
        border-[#f3f4f6] overflow-hidden duration-200"
      >
      <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
        <CalendarCheck className="w-4 h-4 text-cyan-500" />
        Daily Streak
      </div>

      <h2 className="mt-4 text-4xl font-bold text-purple-600">
        {profile?.streak} day
      </h2>

      <div className="mt-4 flex gap-2">
        {days.map((day, index) => {
          const activeDayIndex = index === todayIndex || index < todayIndex && index >= todayIndex - profile?.streak + 1
          return(
          <div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center bg-gray-200 text-gray-400 justify-center text-xs font-medium
              ${activeDayIndex
                ? "border-purple-500 border-3"
                : ""}`}
          >
            {day}
          </div>
        )})}
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Check in daily to earn +5 points
      </p>

      <button className={`mt-4 flex gap-2 justify-center items-center w-full py-2 rounded-full text-white bg-[#930ef1] text-sm font-medium 
       ${checkedInToday
      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
      : 'bg-primary text-white cursor-pointer'}` }
        onClick={handleDailyReward} disabled={checkedInToday}
      >
        {loading ? "" : <CloudLightningIcon className="w-6 h-6" />  }
        
        {loading ? 
          <span>Claiming...</span> 
          : checkedInToday ? 
          <span>Claimed Today!</span> 
          : 
          <span>Claim Today's Points</span>
        }
      </button>
    </div>
  );
}
