"use client";

import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
    {
        name: "home",
        path: "#home"
    },
    {
        name: "about",
        path: "#about"
    },
    {
        name: "projects",
        path: "#projects"
    },
    {
        name: "services",
        path: "#services"
    },
    {
        name: "contact",
        path: "#contact"
    },
]

const DesktopNav = () => {

    const pathname = usePathname();

    return (
        <div className='flex gap-12'>
        {
            links.map((link, index) => (
                <a href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent" } capitalize font-medium hover:text-accent transition-all`}>
                    {link.name}
                </a>
            ))
        }
        </div>
    )
}

export default DesktopNav;
