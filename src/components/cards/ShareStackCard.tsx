import { Share2 } from "lucide-react";

export function ShareStackCard( { toggleStackShareModal } : { toggleStackShareModal: ()=> void }) {
  return (
    <div className="bg-[#F7F8FC] rounded-2xl shadow-xs overflow-hidden hover:-translate-y-1.5 hover:border-purple-500 hover:border hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-200">
        <div className="flex w-full p-3 gap-2 text-sm font-medium text-gray-700 bg-white rounded-tl=2xl rounded-tr-2xl">
          <div className="flex items-center gap-2 text-sm font-medium w-10 h-10 rounded-[10px]  justify-center shrink-0 bg-[rgba(228,144,230,0.1)] text-[#9013fe]">
            <Share2 className="text-purple-500" />
          </div>
          <div className="block">
            <p>
                Share Your Stack
            </p>
            <p className="mt-1 text-xs text-gray-500">
            Earn +25 pts 
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-3 items-center font-medium">
            <p>Share your stack</p>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-purple-100
             text-[#9013fe] hover:text-white font-medium hover:bg-[#9013fe] transition cursor-pointer"
              onClick={toggleStackShareModal}
             >
                <Share2 />
                Share
            </button>
        </div>

    </div>
  );
}
