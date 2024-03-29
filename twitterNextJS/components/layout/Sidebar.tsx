import React from 'react'
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa';
import { SidebarItem } from './SidebarItem';
import { SidebarLogo } from './SidebarLogo';
import { SidebarTweetButton } from './SidebarTweetButton';

export const Sidebar = () => {
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notification',
            href: '/notification',
            icon: BsBellFill
        },
        {
            label: 'Profile',
            href: '/users/123',
            icon: FaUser
        },
    ]
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
        <div className='flex flex-col items-end'>
            <div className='space-y-2 lg:w-[230px]'>
                <SidebarLogo />
                {items.map((item) => (
                    <SidebarItem 
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    />
                ))}
                <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout"/>
                <SidebarTweetButton />
            </div>
        </div>
    </div>
  )
}