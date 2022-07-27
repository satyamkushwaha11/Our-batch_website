import React from 'react'

function Header() {
    return (
        <>
            <div className='h-4/12   rounded-sm flex justify-between items-center w-full border-b-slate-100 border-b-2'>
                <div className='w-2/12  flex justify-center'>
                    <div className='w-5/6 h-5/6'>
                        <img src="/icons/our-batch-logo.png" alt="" className='w-5/6 h-5/6'/>
                    </div>
                </div>
                <div className='w-6/12 flex px-20 lg:my-0 my-2'>
                    <label htmlFor="simple-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                            required=""
                        />
                    </div>
                    <button
                        type="submit"
                        className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>


                </div>
                <div className='w-4/12 flex justify-end px-2'>
                    <div className=''>

                        <button
                            id="dropdownUserAvatarButton"
                            data-dropdown-toggle="dropdownAvatar"
                            className=" flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            type="button"
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-10 h-10 rounded-full"
                                src="/images/men.jpg"
                                alt="user photo"
                            />
                        </button>
                    </div>
                    {/* <div>
                        ss
                    </div> */}

                    {/* Dropdown menu */}
                    {/* <div
                        id="dropdownAvatar"
                        className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block"
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="bottom"
                        style={{
                            position: "absolute",
                            inset: "0px auto auto 0px",
                            margin: 0,
                            transform: "translate3d(326.4px, 62.4px, 0px)"
                        }}
                    >
                        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                            <div>Bonnie Green</div>
                            <div className="font-medium truncate">name@flowbite.com</div>
                        </div>
                        <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownUserAvatarButton"
                        >
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Earnings
                                </a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a
                                href="#"
                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Sign out
                            </a>
                        </div>
                    </div> */}

                </div>
            </div>
        </>

    )
}

export default Header