import React from 'react';
import MenuItem from './menuItem/MenuItem';
import { AiFillHome } from "react-icons/ai"
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';




const index = () => {
    return (
        <header className='grid grid-flow-row grid-cols-12 gap-5 w-full border py-3 fixed'>
            <div className='col-span-3 flex  justify-evenly items-center'>
                <MenuItem title='home' path='/' Icon={AiFillHome} />
                <MenuItem title='about' path='/about' Icon={BsFillInfoCircleFill} />
            </div>
            <Link href={'/'} className='col-span-8 flex justify-end items-center '>
                <span className='text-2xl bg-amber-600 px-4 py-1 text-gray-700 font-semibold rounded-lg'>IMDb</span>

                <span className='mx-2 text-xl'>Clone</span>
            </Link>
        </header>
    )
}

export default index