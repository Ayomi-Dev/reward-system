import { Calendar, Gift, UserPlus } from "lucide-react";

export function FeaturedCard() {
  return (
    <div className="rounded-2xl bg-white
      shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all 
      hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] 
      border-[#f3f4f6] overflow-hidden duration-200"
    >
      <div className="p-4 bg-[linear-gradient(135deg,#9013FE_0%,#70D6FF_100%)] text-white relative overflow-hidden">
        <span className="tabsolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">Featured</span>
        <div className="flex items-center justify-between">
          <h3 className="text-[1.25rem] font-bold relative z-2">Top Tool Spotlight</h3>
          <div className="overflow-hidden relative rounded-full size-10 md:size-16">
            <img src="https://api.flowvahub.com/storage/v1/object/public/icons//reclaim%20(1).png" />
          </div>
        </div>
        <p className="text-lg"><strong> Reclaim</strong></p>
      </div>

      <div className="flex justify-start mb-4 p-4">
        <div className="w-6 h-6 animate-pulse  rounded-md flex items-center justify-center mr-4 shrink-0 text-[#9013fe]">
          <Calendar className="text-[#9013fe]"/>
        </div>
        <div className="flex-1">
          <h4 className="mb-1 font-semibold">Automate and Optimize Your Schedule</h4>
          <p className="text-[0.875rem] text-gray-600">Reclaim.ai is an AI-powered calendar assistant that automatically schedules your tasks, meetings, and breaks to boost productivity. Free to try — earn Flowva Points when you sign up!</p>
        </div>
      </div>
      

      <div className="px-4 py-1.25 flex text-xs justify-between items-center border border-t-[#f3f4f6] border-b-0 border-r-0 border-l-0">
        <button className="bg-[#9013fe] hover:bg-[#8628da] text-white py-2 px-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 border-0">
          <UserPlus className="text-[0.5px]" /> <span>Sign Up</span>
        </button>
        <button className="bg-[linear-gradient(45deg,#9013FE,#FF8687)] text-white py-2 px-4 rounded-full flex items-center gap-1 font-semibold">
          <Gift className="text-[0.5px]" />  <span>Claim 50 pts</span>
        </button>          
        
      </div>
      
    </div>
  );
}
