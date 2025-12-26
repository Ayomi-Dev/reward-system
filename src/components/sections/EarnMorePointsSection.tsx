import { ReferWinCard } from '../cards/ReferWinCard'
import { ShareStackCard } from '../cards/ShareStackCard'

const EarnMorePointsSection = () => {
  return (
    <section>
      <div className="mt-10">
        <h2 className="text-lg md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">
            Earn More Points
        </h2> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ReferWinCard />
          <ShareStackCard/>
        </div>
      </div>

    </section>
  )
}

export default EarnMorePointsSection