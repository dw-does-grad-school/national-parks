import Link from 'next/link';

const Footer = () => {
    return ( 
        <footer className="bg-amber-50 text-orange-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Navigation Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-orange-400 hover:text-amber-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/parks" className="text-orange-400 hover:text-amber-600 transition-colors">
                                    Parks
                                </Link>
                            </li>
                            <li>
                                <Link href="/hikes" className="text-orange-400 hover:text-amber-600 transition-colors">
                                    Hikes
                                </Link>
                            </li>
                            <li>
                                <Link href="/plans" className="text-orange-400 hover:text-amber-600 transition-colors">
                                    Plans
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a 
                                    href="https://www.nps.gov/index.htm" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:text-amber-600 transition-colors"
                                >
                                    National Park Service
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://www.nps.gov/subjects/developer/api-documentation.htm" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:text-amber-600 transition-colors"
                                >
                                    NPS API Documentation
                                </a>
                            </li>
                            <li>
                                <Link href="/about" className="text-orange-400 hover:text-amber-600 transition-colors">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about/disclaimer" className="text-orange-400 hover:text-amber-600 transition-colors">
                                    Disclaimer
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-orange-400 hover:text-amber-600 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-orange-400 hover:text-amber-600 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-orange-400 text-center text-orange-400">
                    <p>&copy; {new Date().getFullYear()} Parksy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;