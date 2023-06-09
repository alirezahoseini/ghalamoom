import React from 'react'
import { TbLogout } from 'react-icons/tb'
import './LogoutBtn.css'
import { useNavigate } from 'react-router-dom'

// utils
import {deleteCooki} from '../../../../../utils/cookis'

export default function LogoutBtn({ isOpen }) {
    const navigateTo = useNavigate()
    const logOut = () => {
        deleteCooki('username')
        deleteCooki('email')
        deleteCooki('token')
        deleteCooki('userid')
        navigateTo('/')
    }
    return (
        <button type='button' id='logout-btn' className={`flex w-full items-center gap-3 mt-2 mb-1 mr-2 ${() => 'active'}`} onClick={logOut} title='خروج از حساب کاربری' >
            <div className='item-icon p-3 rounded-full  flex items-center justify-center text-xl text-gray-800 dark:text-gray-300'>
                <span className='icon'>
                    <TbLogout />
                </span>
                <span className='bg'></span>
            </div>
            <div className={`transition-all duration-200 flex items-center whitespace-nowrap ${isOpen ? 'w-fit opacity-100 visible translate-x-0' : '-translate-x-5 w-0 opacity-0 invisible'}`}>
                <h4 className='title font-bold text-gray-5 mt-2 text-gray-500 dark:text-gray-300 ' >خروج از حساب</h4>
            </div>
        </button>
    )
}
