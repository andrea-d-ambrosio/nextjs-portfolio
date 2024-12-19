"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {usePathname} from 'next/navigation'
import Link from 'next/link';
import  { CiMenuFries }  from 'react-icons/ci'

const links = [
    {
        name: 'home',
        path: '/'

    },
    {
        name: 'about',
        path: '/about'

    },
    {
        name: 'services',
        path: '/services'

    },
    {
        name: 'projects',
        path: '/projects'

    },
    {
        name: 'contacts',
        path: '/contacts'

    },
]

const MobileNav = () => {
    const pathName = usePathname();
    return <Sheet>
        <SheetTrigger className="flex justify-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className='mt-32 mb-16 text-center text-2xl'>
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        Andrea<span className='text-accent'>.</span>
                    </h1>
                </Link>
            </div>

            <nav className='flex flex-col justify-center items-center gap-8'>
                {
                    links.map((link, index) => {
                        return <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    })
                }
            </nav>

        </SheetContent>



    </Sheet>
    return <div>Mobile Nav</div>
}

export default MobileNav