import {  CalendarCheck, CloudLightningIcon } from "lucide-react";
import { useProfile } from "../../context/ProfileContext";
import { useState } from "react";


export function DailyStreakCard( {checkIn} : { checkIn: () => Promise<void>}) {
  const { profile } = useProfile();
  const days = ['M','T','W','T','F','S','S']
  const todayIndex = (new Date().getDay() + 6) % 7 
  const today = new Date().toISOString().split('T')[0] //converts current date to Y-M-D Format
  const [loading, setLoading] = useState(false)
  const checkedInToday = profile?.last_checkin === today //controls button state to disable if user already checks in
  const lastCheckin = new Date(`${profile?.last_checkin}T00:00:00`);  //sets lastcheckin day to midnight time of that day
  const currentDay = new Date().setHours(0, 0, 0, 0); //sets time to midnight of the current day
  const diffInDaysLastCheckin = (currentDay - lastCheckin.getTime()) / (1000 * 60 * 60 * 24) >= 2
  console.log(diffInDaysLastCheckin)

  const claimPoints = async() => {
      setLoading(true);
      await checkIn();
      setLoading(false);
  }
  
  return (
     <div className="bg-[#F7F8FC] border shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all 
        rounded-2xl hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] 
        border-[#f3f4f6] overflow-hidden duration-200"
      >
      <div className="flex items-center gap-2 text-lg p-4 bg-[#eef2ff] font-semibold text-gray-700">
        <CalendarCheck className="w-4 h-4 text-cyan-500" />
        Daily Streak
      </div>

      <h2 className="mt-4 text-4xl font-bold px-4 text-purple-600">
        {profile?.streak} day
      </h2>

      <div className="mt-4 px-4 flex items-center justify-center gap-2">
        {days.map((day, index) => {
          const activeDayIndex = index === todayIndex || index < todayIndex && index >= todayIndex - profile?.streak + 1
          return(
          <div
            key={index}
            className={`w-10 h-10 rounded-full flex items-center bg-gray-200 text-gray-400 justify-center text-xs font-medium
              ${activeDayIndex
                ? "border-purple-500 border-3"
                : ""}`}
          >
            {day}
          </div>
        )})}
      </div>
        <p className="mt-4 px-4 text-center text-sm text-gray-500">
          Check in daily to earn +5 points
        </p>

      <div className="px-4 py-3 flex items-center justify-center">
        <button className={`mt-4 flex gap-2 justify-center items-center w-full py-2 rounded-full text-sm font-medium 
        ${checkedInToday
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
        : 'bg-[#930ef1] text-white cursor-pointer'}` }
          onClick={claimPoints} disabled={checkedInToday}
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
    </div>
  );
}
