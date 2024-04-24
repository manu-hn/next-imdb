
import Link from 'next/link'
import React from 'react'

type Props = {
    title: string,
    path: string,
    Icon: React.ComponentType<{ className ?: string}>

}

const MenuItem = ({ Icon, path, title }: Props) => {


    return (
        <Link href={path} className='hover:text-orange-600'>
        <Icon className="text-2xl sm:hidden" />
        <p className='uppercase hidden sm:block'>{title}</p>
        </Link>
    )
}

export default MenuItem;