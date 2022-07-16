import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center md:px-6  py-1  my-auto w-full">

          <div className="w-full md:w-4/6 lg:w-2/6  bg-white md:p-5 p-0 rounded-lg lg:rounded-l-none border-2 my-auto mx-2">
            <h3 className="pt-4 text-3xl font-semibold text-gray-700 text-center">Create an Account!</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4 lg:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>


              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="phone"
                  placeholder="Phone no."
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4 md:flex md:justify-between items-end">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  {/* <p className="text-xs italic text-red-500">
                    Please choose a password.
                  </p> */}
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="c_password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="c_password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Register Account
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                  onClick={() => navigate('/login')}
                >
                  Already have an account?<span className='texts-indigo-600 font-bold hover:text-indigo-800 focus:outline-none focus:underline'> Login!</span>
                </a>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>

    // <div className='card  container  col-md-4  col-12 py-3 pb-4 mt-5 ' >
    //   <div className='  my-2 mx-auto  '>
    //     <label htmlFor="" className='d-block my-1'>Email</label>
    //     <input type="text" className='' placeholder='Enter your email' />
    //   </div>
    //   <div className=' my-2 mx-auto '>
    //     <label htmlFor="" className='d-block  my-1'>Phone Number</label>
    //     <input type="text" className='' placeholder='Enter your password' />
    //   </div>


    //   <div className=' my-2 mx-auto '>
    //     <label htmlFor="" className='d-block  my-1'>Password</label>
    //     <input type="text" className='' placeholder='Enter your password' />
    //   </div>

    //   <div className=' my-2 mx-auto '>
    //     <label htmlFor="" className='d-block  my-1'>Confirm Password</label>
    //     <input type="text" className='' placeholder='Enter your password' />
    //   </div>
    //   <br />
    //   <div className='my-2 mx-auto '>
    //     <div className='btn btn-success'>Signup</div>
    //   </div>
    //   <br />
    //   <br />
    //   <div className='col-8 mx-auto d-flex justify-content-center align-items.center'>

    //     <div className='btn btn-sm btn-primary' onClick={()=>navigate('/login')}>Login</div>
    //   </div>
    // </div>
  )
}

export default Signup