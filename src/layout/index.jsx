import React, { useEffect } from 'react'
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { useLocation, useNavigate } from 'react-router-dom'
// import useDeviceDetect from '../Helper/checkInnerwidth';
import Sidebar from '../components/Sidebar'
import RightSideBar from '../components/RightSideBar';
import Header from '../components/Header'
import FooterBar from '../components/FooterBar';



function Layout(props) {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (!token) {
            navigate("/login");
            return
        }
    }, [])


    return (
        <div className='relative h-screen bg-slate'>
            <div className=' sm:w-[100%] w-screen sm:h-[10%] h-[10%]'>
                <Header></Header>
            </div>
            <div className='flex justify-between  sm:min-h-[90%] min-h-[90%] '>
                <div className='sm:block hidden w-2/12 sticky left-0     bg-red-700'>
                    <Sidebar  ></Sidebar>
                </div>
                <div className='sm:w-8/12 w-screen '>
                    {props.children}
                </div>
                <div className='sm:block hidden w-2/12 sticky right-0 '>
                    <RightSideBar />
                </div>
            </div>
            <div className='absolute bottom-0  w-full sm:hidden'>
                <FooterBar />
            </div>
        </div>
    )
}

export default Layout