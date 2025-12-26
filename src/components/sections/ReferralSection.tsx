import { ReferEarnCard } from '../cards/ReferEarnCard'
import SocialIcons from '../SocialIcons'

const ReferralSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-lg md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">Refer &amp; Earn</h2>
      <div className="shadow-[0_5px_15px_rgba(0,0,0,0.05)] rounded-2xl hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
          <ReferEarnCard />
          <SocialIcons />
      </div>
    </section>
  )
}

export default ReferralSection