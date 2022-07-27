import React, { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'



function Layout(props) {
    const navigate = useNavigate()
    const location = useLocation()
    const token = localStorage.getItem('token')
    console.log(location.pathname);
    useEffect(() => {
    if (!token) {
        navigate("/login");
        return
    }
    }, [])


    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>

        </div>
    )
}

export default Layout