"use client";

import { usePathname } from 'next/navigation';
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import Link from 'next/link';

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

const MobileNav = () => {

    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href={'/'}>
                        <h1 className='text-4xl font-semibold'>
                            Aashir<span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>
                <nav className='flex justify-center items-center gap-8 flex-col'>
                    {
                        links.map((link, index) => (
                            <Link key={index} href={link.path} className={`${link.path === pathname && "text-accent border-b-2 border-accent" } capitalize font-medium hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                        ))
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;
