import React from "react";
import { FaPinterest, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Foodish</h3>
                        <p>Continue Foodish 2023 all rights reserved</p>
                        <div className="mt-4">
                            <h3 className="text-lg">Follow Us On</h3>
                            <div className="flex space-x-2">
                                <span className="text-2xl text-pink-500 hover:text-pink-400">
                                    <FaPinterest />
                                </span>
                                <span className="text-2xl text-pink-500 hover:text-pink-400">
                                    <FaInstagram />
                                </span>
                                <span className="text-2xl text-pink-500 hover:text-pink-400">
                                    <FaTwitter />
                                </span>
                                <span className="text-2xl text-pink-500 hover:text-pink-400">
                                    <FaFacebook />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        {/* Other footer content */}
                    </div>
                    <div className="p-4">
                        {/* Other footer content */}
                    </div>
                    <div className="p-4">
                        {/* Other footer content */}
                    </div>
                </div>
                <hr className="mt-8 border-t border-gray-600" />
            </div>
        </footer>
    );
}

export default Footer;
