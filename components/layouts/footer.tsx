import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-200/50 w-full text-black rounded-2xl py-14 px-6">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
                {/* Brand & Social */}
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-extrabold mb-3 tracking-tight flex items-center gap-2">
                        <svg className="w-7 h-7 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                        Agency
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Building brands and digital experiences that matter.
                    </p>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" aria-label="Twitter" className="hover:text-sky-600 transition-colors text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.635 4.085A12.72 12.72 0 0 1 3.112 4.89a4.48 4.48 0 0 0 1.388 5.976 4.44 4.44 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.592 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.114A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.698z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76c.965 0 1.75.79 1.75 1.76s-.785 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition-colors text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.974.974 1.252 2.241 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.974.974-2.241 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.974-.974-1.252-2.241-1.314-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608.974-.974 2.241-1.252 3.608-1.314C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395 2.697 2.376 2.414 3.488 2.355 4.769.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Services */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg tracking-wide">Services</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>
                            <Link href="/services/branding" className="hover:text-indigo-600 transition-colors">Branding</Link>
                        </li>
                        <li>
                            <Link href="/services/web-design" className="hover:text-indigo-600 transition-colors">Web Design</Link>
                        </li>
                        <li>
                            <Link href="/services/marketing" className="hover:text-indigo-600 transition-colors">Marketing</Link>
                        </li>
                        <li>
                            <Link href="/services/consulting" className="hover:text-indigo-600 transition-colors">Consulting</Link>
                        </li>
                    </ul>
                </div>
                {/* Company */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg tracking-wide">Company</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>
                            <Link href="/about" className="hover:text-indigo-600 transition-colors">About Us</Link>
                        </li>
                        <li>
                            <Link href="/work" className="hover:text-indigo-600 transition-colors">Our Work</Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg tracking-wide">Contact</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>
                            <span className="block font-medium text-black">Email</span>
                            <a href="mailto:hello@agency.com" className="hover:text-indigo-600 transition-colors">hello@agency.com</a>
                        </li>
                        <li>
                            <span className="block font-medium text-black">Phone</span>
                            <a href="tel:+1234567890" className="hover:text-indigo-600 transition-colors">+1 234 567 890</a>
                        </li>
                        <li>
                            <span className="block font-medium text-black">Address</span>
                            123 Agency St, City, Country
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
                <span>
                    &copy; {new Date().getFullYear()} Agency. All rights reserved.
                </span>
                <span>
                    <Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
                    <span className="mx-2">|</span>
                    <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
                </span>
            </div>
        </footer>
    );
}