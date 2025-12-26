
const RewardSuccessModal = ({ points, onCloseModal }: { points: number, onCloseModal: () => void}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-95 rounded-2xl bg-white p-6 text-center shadow-xl animate-scaleIn">

        {/* Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-xl font-semibold text-purple-600">
          Level Up! 🎉
        </h2>

        <p className="mt-2 text-3xl font-bold text-purple-700">
          +{points} Points
        </p>

        <p className="mt-2 text-sm text-gray-500">
          You've claimed your daily points!  
          Come back tomorrow for more.
        </p>

        <button
          onClick={onCloseModal}
          className="mt-6 w-full rounded-lg bg-purple-600 py-2 text-white hover:bg-purple-700 transition"
        >
          Got it
        </button>
      </div>
    </div>
  )
}


export default RewardSuccessModal