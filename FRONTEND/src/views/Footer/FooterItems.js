import React from 'react'

function FooterItems({Links,title})  {
  return (
    <ul>
      <span className='font-semibold mb-1 text-xl'>{title}</span>
      {
        Links.map((Link)=>(
          <li className='text-gray-400 hover:text-white hover:scale-110 duration-300 text-sm ' key={Link.link}>{Link.name}</li>
          
        ))
       
      }
    </ul>
  )
}

export default FooterItems
