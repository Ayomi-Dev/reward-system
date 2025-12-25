import FB from "../assets/socials/fb.png"
import X from "../assets/socials/x.jpeg"
import WA from "../assets/socials/wa.jpeg"
import LI from "../assets/socials/li.png"



const SocialIcons = () => {
  return (
    <div className="flex gap-4 justify-center text-gray-400 items-center mt-4 pb-3">
      <img src={FB} alt="Facebook" className="w-7 h-7 rounded-full object-cover hover:-translate-y-0.75 duration-200 transition-transform cursor-pointer" />
      <img src={X} alt="Facebook" className="w-7 h-7 rounded-full object-cover hover:-translate-y-0.75 duration-200 transition-transform cursor-pointer" />
      <img src={LI} alt="Facebook" className="w-7 h-7 rounded-full object-cover hover:-translate-y-0.75 duration-200 transition-transform cursor-pointer" />
      <img src={WA} alt="Facebook" className="w-7 h-7 rounded-full object-cover hover:-translate-y-0.75 duration-200 transition-transform cursor-pointer" />
    </div>
  )
}

export default SocialIcons;