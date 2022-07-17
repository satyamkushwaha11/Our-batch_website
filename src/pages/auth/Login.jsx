import React, { useLayoutEffect } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getLocalStorage, setLocalStorage } from '../../config/session'
import { login } from '../../redux/actions/auth.action'
import { login_Failed } from '../../redux/reducers/auth.reducers/auth.reducer'

function Login() {
    const navigate = useNavigate()
   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
   
    useEffect(()=>{
        let token = getLocalStorage('token')
        if (token) {
            navigate("/")
        }
    },[])

  
   

    const onSubmit = () => {
        let login_payload = {
            email,
            password
        }
        console.log('asdfasd');
        dispatch(login(login_payload)).
            then((result) => {
                console.log(result, 'llllllllllll');
                const { email, firstName, lastName, role, token, userName } = result?.data
                const dataStore = { email, firstName, lastName, role, token, userName }
                for (const property in dataStore) {
                    // console.log(`${property}: ${result?.data?.data[property]}`);
                    // console.log(property,dataStore[property]);
                    setLocalStorage(property, dataStore[property])
                }
                navigate('/', { replace: true })

            }).catch((err) => {
                dispatch(login_Failed())
                console.log(err)
            });

    }

    return (
        <>
            {/* component */}
            <div className="container mx-auto md:mt-20 ">
                <div className="flex justify-center md:px-6  py-1  my-auto w-full">

                    <div className="w-full md:w-4/6 lg:w-2/6 bg-white md:p-5 p-0 rounded-lg lg:rounded-l-none border-2 my-auto mx-2">
                        {/* header */}
                        <div className="text-center my-6">
                            <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
                            <p className="text-gray-500">Sign in to access your account</p>
                        </div>
                        {/* sign-in */}
                        <div className="m-6">
                            <form className="mb-4">
                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        Email Address/Phone No.
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email-address/phone "
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                    />
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between mb-2">
                                        <label
                                            htmlFor="password"
                                            className="text-sm text-gray-600 dark:text-gray-400"
                                        >
                                            Password
                                        </label>
                                        <a
                                            href="#!"
                                            className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Your password"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                    />
                                </div>
                                <div className="mb-6">
                                    <button
                                        type="button"
                                        className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out"
                                        onClick={onSubmit}
                                    >
                                        Sign in
                                    </button>
                                </div>
                                <p className="text-sm text-center text-gray-400">
                                    Don't have an account yet?
                                    <a
                                        href="#"
                                        onClick={() => navigate('/signup')}
                                        className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
                                    >
                                        Sign up
                                    </a>
                                    .
                                </p>
                            </form>
                            {/* seperator */}
                            <div className="flex flex-row justify-center mb-8">
                                <span className="absolute bg-white px-4 text-gray-500">
                                    or sign-in with
                                </span>
                                <div className="w-full bg-gray-200 mt-3 h-px" />
                            </div>
                            {/* alternate sign-in */}
                            {/* coming soon */}
                            {/* <div className="flex flex-row gap-2">
                                <button className="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="w-5"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                    >
                                        <g fill="none">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                                                fill="currentColor"
                                            />
                                        </g>
                                    </svg>
                                    Google
                                </button>
                                <button className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="w-5"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                    >
                                        <g fill="none">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                                                fill="currentColor"
                                            />
                                        </g>
                                    </svg>
                                    Github
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className='card  container  col-md-4  col-12 py-3 pb-4 mt-5 ' >
                <div className=' my-2 mx-auto'>
                    <label htmlFor="" className='d-block my-1'>Email</label>
                    <input type="text" placeholder='Enter your email' />
                </div>

                <div className=' mx-auto'>
                    <label htmlFor="" className='d-block  my-1'>Password</label>
                    <input type="text" placeholder='Enter your password' />
                </div>
                <br />
                <div className='mx-auto'>
                    <div className='btn btn-success'>Login</div>
                </div>
                <br />
                <br />
                <div className='col-8 mx-auto d-flex justify-content-between align-items.center'>
                    <div className='fntSz-13 text-primary text-decoration-underline'>
                      forgot Password
                    </div>
                    <div className='btn btn-sm btn-primary' onClick={()=>navigate('/signup')}>signup</div>
                </div>
            </div> */}

        </>
    )
}

export default Login