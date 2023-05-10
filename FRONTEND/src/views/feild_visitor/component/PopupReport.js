import React from 'react'

function PopupReport({visivle, onClose,

    _id,
    firstname,
    lastname,
    email,
    arrival,
    depature,
    problem,
    solution,

}) {
    const handleClose = (e)=>{
       if (e.target.id === "container")  onClose();
         
    };

    //console.log(email)

    if(!visivle) return null;
  return (
    <div 
    id='container'
    onClick={handleClose}
    className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
      
      <div className="bg-white pb-4 md:m-5 md:flex md:ml-[300px] shadow-lg md:w-[800px] ">
        <form className=" mt-5 md:w-full md:px-10 md:m-10">
          <div className="grid grid-cols-2 justify-center md:flex ">
            <div className="px-3 mb-6 md:mb-0">
              <label
                className="block md:w-[300px] first-letter-uppercase text-lg font-semibold mb-1 text-gray-400"
                for="grid-first-name"
              >
                First Name :
              </label>
              <span className="text-sm">{firstname}</span>

              <label
                className="block first-letter-uppercase text-lg font-semibold mb-1 rounde text-gray-400"
                for="grid-last-name"
              >
                Last Name :
              </label>
              <span className="text-sm">{lastname}</span>
              <label
                className="block  first-letter-uppercase text-lg font-semibold mb-1 text-gray-400"
                for="grid-first-name"
              >
                E-mail Address:
              </label>
              <span className="text-sm">{email}</span>
            </div>

            <div className="w-full px-3 ">
              <label
                className="block first-letter-uppercase text-lg font-semibold mb-1 rounde text-gray-400"
                for="grid-last-name"
              >
                Arrival Time :
              </label>
              <span className="text-sm">{arrival}</span>
              <label
                className="block first-letter-uppercase text-lg font-semibold mb-1 rounde text-gray-400"
                for="grid-last-name"
              >
                Departure Time :
              </label>
              <span className="text-sm">{depature}</span>
            </div>
          </div>

          <div className=" pb-3">
            <div className="w-full px-3">
              <label className="block  first-letter-uppercase text-lg font-semibold mb-1 text-gray-400">
                Problem
              </label>
              <textarea
                className="bg-slate-100/50 appearance-none block w-full  p-2  mb-3 leading-tight "
                type="text"
                value={problem}
              />

              <label className="block uppercase tracking-wide  text-gray-400 font-bold mb-2">
                Solution
              </label>
              <textarea
                className="bg-slate-100/50 appearance-none block w-full p-2  mb-3 leading-tight "
                type="text"
                value={solution}
              />
            </div>
          </div>
          <div className="flex justify-center ">
            <button className="btn-primary px-5 m-3">Edit</button>
            <button className="btn-primary2 m-3 px-5">Delete</button>
          </div>
        </form>
      </div>
      
      </div>
   
  )
}

export default PopupReport
