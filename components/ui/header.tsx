'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return ( 
        <header className="bg-amber-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo.png"
                                alt="Parksy Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className="ml-3 text-orange-400 text-xl font-bold">Parksy</span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center space-x-8">
                        <Link 
                            href="/" 
                            className="text-orange-400 hover:text-amber-600 hover:underline px-3 py-2 rounded-md text-sm font-bold"
                        >
                            Home
                        </Link>
                        <Link 
                            href="/parks" 
                            className="text-orange-400 hover:text-amber-600 hover:underline px-3 py-2 rounded-md text-sm font-bold"
                        >
                            Parks
                        </Link>
                        <Link 
                            href="/hikes" 
                            className="text-orange-400 hover:text-amber-600 hover:underline px-3 py-2 rounded-md text-sm font-bold"
                        >
                            Hikes
                        </Link>
                        <Link 
                            href="/plans" 
                            className="text-orange-400 hover:text-amber-600 hover:underline px-3 py-2 rounded-md text-sm font-bold"
                        >
                            Plans
                        </Link>
                    </nav>

                    {/* Sign In Button */}
                    <div className="flex items-center">
                        <button className="bg-green-700 hover:bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;