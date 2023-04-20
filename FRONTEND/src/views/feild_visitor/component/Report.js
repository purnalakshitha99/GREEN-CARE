import React from 'react'


export default function Report({_id, firstname,lastname,email,arrival,depature,problem,solution}){
    return(
        <>
         <div className='justify-center flex  '>
            {/* <div className='w-full justify-between bg-slate-500 justify-center flex flex-row'>
                
            <label>name</label>
            <h4 >{firstname} {lastname}</h4>
<br />
            <lable>E-mail</lable>
            <h4>{email}</h4>
<br />
            <lable>Arival Time</lable>
            <h4>{arrival}</h4>
            <br />
            <lable>Depature time</lable>
            <h4>{departure}</h4>
            <lable>Problem</lable>
            <h4>{problem}</h4>
            <lable>Solution</lable>
            <h4>{solution}</h4>

            </div> */}
           
            <form className=" justify-center w-[1000px] flex shadow-xl bg-slate-400/50 rounded-xl mt-5 mb-5 p-5 ">
                
        <div class="w-[1000px] max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide  text-xl font-bold mb-2 rounde text-blue-900"
                for="grid-first-name"
              >
                First Name
              </label>
              <span className='text-lg'>{firstname}</span>
              {/* <input
                className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-3 leading-tight "
                id="grid-first-name"
                type="text"
                required
                
                value={firstname}
              /> */}
              
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide  text-xl font-bold mb-2 text-blue-900"
                for="grid-last-name"
              >
                Last Name
              </label>
              <span className='text-lg'>{lastname}</span>
              {/* <input
                className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-3 leading-tight "
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                required
               
                value={lastname}
              /> */}
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide  text-xl font-bold mb-2 text-blue-900">
                E-Mail
              </label>
             <span className='text-lg'>{email}</span>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide  text-xl font-bold mb-2 text-blue-900"
                for="grid-first-name"
              >
                Arival time
              </label>
              <span className='text-lg'>{arrival}</span>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide  text-xl font-bold mb-2 text-blue-900"
                for="grid-last-name"
              >
                Dipature Time
              </label>
             <span className='text-lg'>{depature}</span>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide  text-xl font-bold mb-2 text-blue-900">
                Problem
              </label>
              <textarea
                className="frmname appearance-none block w-full text-lg bg-slate-400/10 rounded-xl py-5 px-4 mb-3 leading-tight "
                type="text"
                
                value={problem}
              />
            </div>
          </div>

          {/* <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
                Upload Image
              </label>
              <input
                className="block w-[250px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none px-2 py-2 dark:border-gray-600 dark:placeholder-gray-400 "
                type="file"
              />
            </div>
          </div> */}
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-blue-900 text-xl font-bold mb-2">
                Solution
              </label>
              <textarea
                className="frmname appearance-none block w-full text-lg bg-slate-400/10 rounded-xl py-5 px-4 mb-3 leading-tight "
                type="text"
                value={solution}
              />
            </div>
          </div>
          
        </div>
        
      </form> 
        </div>
        </>
    )
}
