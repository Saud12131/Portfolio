import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-4 left-4 right-4 z-50 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between border h-16 bg-white-400 bg-opacity-80 backdrop-blur-md rounded-full shadow-lg px-4">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-slate-50 ">
                            Saud Sayyed
                        </Link>
                    </div>
                    <div className="flex-1 text-center">
                        <Link to="/" className="text-xl font-bold text-slate-50">
                            Portfolio
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                to="/home"
                                className="text-slate-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                                Full Stack Web Developer
                            </Link>
                            <Link
                                to="/About"
                                className="text-slate-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                                Software Engineer
                            </Link>
                            <Link
                                to="/Projects"
                                className="text-slate-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                                Blog Writer
                            </Link>
                            <Link
                                to="/Contact"
                                className="text-slate-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                                UI/UX Designer
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="mt-2 bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-lg px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="/home"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                        >
                            Full Stack Web Developer
                        </Link>
                        <Link
                            to="/Projects"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                        >
                            Software Engineer
                        </Link>
                        <Link
                            to="/About"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                        >
                            Blog Writer
                        </Link>
                        <Link
                            to="/Contact"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                        >
                            UI/UX Designer
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
