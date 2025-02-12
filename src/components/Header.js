import React from 'react'
import { EXPLORE_ICON, HELP_ICON, LOGO } from '../utils/constants'

const Header = () => {
    return (
        <div className='flex justify-between m-2 shadow-lg h-20'>
            <div>
                <img className='h-20 ' src={LOGO} alt='logo'></img>
            </div>
            <div className='flex items-center'>
                <ul className='flex m-4 p-4'>
                    <img className='h-5 my-1' src={HELP_ICON} alt='help' />

                    <li className='px-4'>Help</li>
                    <button className='px-4  border border-gray-300'>Contact Sales</button>
                    <img className='h-5 my-1 mx-2' src={EXPLORE_ICON} alt='explore' />
                    <li className='px-4'>Explore Apps</li>
                    {/* <li className='px-4'>Login</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header