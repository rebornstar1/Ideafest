import React from 'react'
import FounderImage from '../assets/sanjayprofile.jpeg'

function About() {
  return (
    <div className='flex flex-row flex-wrap font-montserrat p-5 sm:p-15'>
      <div className='w-full md:w-1/3 pt-5 sm:pt-16'>
        <img src={FounderImage} alt={"Sanjay Manikrao Paul founder of VentureBoost"} className='w-96 h-120 rounded-3xl mx-auto'></img>
      </div>
      <div className='w-2/3 py-6 sm:py-12 flex flex-col justify-center'>
         <div className='text-5xl font-semibold'>{`Founders Words`}</div>
         <div className='text-xl font-semibold pt-4'>SANJAY MANIKRAO PAUL</div>
         <div className='text-lg font py-2 text-gray-600'>{`(MERN Web Developer)`}</div>
         <div>
            <div className='py-2'>
               <div>Vision : </div>
               <br></br>
               <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, ipsum non sagittis tincidunt, sapien nulla lobortis odio, eu condimentum nisi leo et arcu. Mauris rutrum nulla id eros suscipit, ac elementum lorem vehicula. Fusce ut libero nec leo vehicula blandit. Aliquam nec sapien id nunc tincidunt tempor. Ut auctor tellus eu efficitur tincidunt. Duis scelerisque neque at consectetur fermentum. Integer lacinia euismod arcu. Vestibulum non libero id odio vulputate la</div>
            </div>
            <div className='py-2'>
                <div>Mission : </div>
                <br></br>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, ipsum non sagittis tincidunt, sapien nulla lobortis odio, eu condimentum nisi leo et arcu. Mauris rutrum nulla id eros suscipit, ac elementum lorem vehicula. Fusce ut libero nec leo vehicula blandit. Aliquam nec sapien id nunc tincidunt tempor. Ut auctor tellus eu efficitur tincidunt. Duis scelerisque neque at consectetur fermentum. Integer lacinia euismod arcu. Vestibulum non libero id odio vulputate la</div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default About
