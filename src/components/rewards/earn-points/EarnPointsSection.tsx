import { DailyStreakCard } from "./DailyStreakCard"
import { FeaturedCard } from "./FeaturedCard"
import { PointsBalanceCard } from "./PointsBalanceCard"

const EarnPointsSection = () => {
  return (
    <section >
        <h2 className=" text-lg md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">
            Your Rewards Journey
        </h2>
        <div className="grid grid-col-1 md:grid-cols-3 gap-6">
            <PointsBalanceCard />
            <DailyStreakCard />
            <FeaturedCard />
        </div>
    </section>
  )
}

export default EarnPointsSection