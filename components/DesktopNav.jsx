"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "about",
        path: "/about"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
]

const DesktopNav = () => {

    const pathname = usePathname();

    return (
        <div className='flex gap-12'>
        {
            links.map((link, index) => (
                <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent" } capitalize font-medium hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            ))
        }
        </div>
    )
}

export default DesktopNav;
