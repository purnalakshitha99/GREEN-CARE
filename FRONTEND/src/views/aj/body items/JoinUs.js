import React from 'react'

function JoinUs() {
  return (
    <div className="grid grid-cols-2  ">
       
        <div className="">
          <img className="object-cover shadow-2xl mt-5" src="https://images.pexels.com/photos/3127883/pexels-photo-3127883.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="">
            <h1 className="text-center text-lg m-0 md:text-4xl md:p-5 font-bold">Join US</h1>
          <p className="md:text-lg m-3 text-xs md:m-3 p-1">
          <span className="text-3xl font-bold">W</span>hy do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like). Where does it come from? Contrary to popular
          belief, Lorem Ipsum is not simply random text. It has roots in a piece
          </p>
          <button className="md:w-[300px] md:h-10 rounded-lg bg-green-700/75 px-3 py-1 hover:bg-green-500 hover:scale-110 duration-300 m-2"> See More</button>
        </div>

      </div>
  )
}

export default JoinUs
