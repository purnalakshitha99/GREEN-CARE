import React from 'react'

function SocialIcons({Icons}) {
  return (
    <>
    <div className='text-teal-400'>
        
        {
            Icons.map((icon)=>(
                
                <span key={icon.name} className='p-2 cursor-pointer inline-flex items-center rounded-full
                bg-gray-700 mx-1.5 hover:text-gray-500 hover:scale-110 duration-300 '>
                    <ion-icon name={icon.name}></ion-icon>

                </span>
                
            ))
        }
      
    </div>
    </>
  )
}

export default SocialIcons
