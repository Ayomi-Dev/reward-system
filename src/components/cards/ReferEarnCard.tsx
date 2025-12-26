import { Copy, Users } from "lucide-react";

export function ReferEarnCard() {
  const referralLink = "https://app.flowvahub.com/signup/?ref=ayo4071";

  return (
    <div className="mt-10 bg-[#F7F8FC] overflow-hidden">
      <div className="flex bg-[#eef2ff] rounded-t-2xl p-4 items-center gap-2 text-sm font-medium text-gray-700">
        <Users className="text-purple-500" />
        <div className="block">
        <h3 className="text-xl font-semibold text-gray-700">
            Share Your Link 
        </h3>
        <p className="text-gray-500 text-sm">
          Invite friends and earn 25 points when they join!
        </p>

        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 text-center">
        <div>
          <p className="text-2xl font-bold text-purple-600">0</p>
          <p className="text-xs text-gray-500">Referrals</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-purple-600">0</p>
          <p className="text-xs text-gray-500">Points Earned</p>
        </div>
      </div>

      <div className="mt-6 bg-purple-50 p-4">
        <label className="text-sm text-gray-700">
          Your personal referral link:
        </label>

        <div className="mt-2 flex items-center gap-2 relative">
          <input type="text" readOnly className="flex-1  border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full pr-10" value={referralLink}></input>
          <button
            onClick={() => navigator.clipboard.writeText(referralLink)}
            className="p-2 rounded-lg text-purple-600 hover:bg-purple-200 absolute right-2"
          >
            <Copy />
          </button>
        </div>
      </div>
    </div>
  );
}
