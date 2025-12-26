import { Layers, X } from 'lucide-react'

const ShareStackModal = ({toggleStackShareModal}: {toggleStackShareModal: ()=> void}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={toggleStackShareModal}>
      <div className="w-95 rounded-2xl bg-white p-6 relative text-center shadow-xl animate-scaleIn">

        <h1 className="text-2xl font-bold">
          Share Your Stack
        </h1>


        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(144,19,254,0.2)]">
          <Layers className='w-6 h-6 text-[#930ef1]  fill-current' />
        </div>


        <p className="mt-2 text-sm text-gray-700">
          You have no stack created yet, go to Tech Stack to create one.
        </p>

       <div className="absolute top-4 right-2 w-8 h-8 flex 
        cursor-pointer items-center justify-center hover:bg-gray-100 rounded-md"
            onClick={toggleStackShareModal}
        >
        <X  className='w-5 h-5' />
       </div>

        
      </div>
    </div>
  )
}

export default ShareStackModal