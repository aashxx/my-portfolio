import Link from 'next/link';
import React from 'react';
import DesktopNav from './DesktopNav';
import { ModeToggle } from './ui/modetoggle';
import MobileNav from './MobileNav';

const Navbar = () => {
    return (
        <nav className='py-8 lg:py-12 z-50'>
            <div className="container mx-auto flex justify-between items-center">
                <Link href={'/'}>
                    <h1 className='text-4xl font-semibold'>
                        Aashir<span className='text-accent'>.</span>
                    </h1>
                </Link>
                <div className="hidden lg:flex items-center gap-8 z-50">
                    <DesktopNav />
                    <ModeToggle />
                </div>
                <div className="lg:hidden flex items-center gap-4 z-50">
                    <ModeToggle />
                    <MobileNav />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
