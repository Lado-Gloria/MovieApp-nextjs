import React from "react";
import { FaPinterest, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h3 className="text-lg font-bold">Download Our App</h3>
                        <h1 className="text-4xl font-bold mb-2">PO<span className="text-blue-500">TT</span>ER</h1>
                    </div>
                    
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold">Navigation</h3>
                        <p>Home</p>
                        <p>My List</p>
                        <p>About Us</p>
                    </div>
                    
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold">Legal</h3>
                        <p>General info</p>
                        <p>Character Gadget</p>
                        <p>Bill Payment Verification</p>
                    </div>
                    
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold">Contact Us:</h3>
                        <p>support@characters.com</p>
                        <p>tel: +201045963322</p>
                        <p>OR By Using:</p>
                        <div className="flex justify-center md:justify-start space-x-2 mt-2">
                            <FaFacebook className="text-3xl text-blue-500 hover:text-blue-700 transition-colors duration-300" />
                            <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700 transition-colors duration-300" />
                            <FaTwitter className="text-3xl text-blue-400 hover:text-blue-600 transition-colors duration-300" />
                        </div>
                    </div>
                    
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold">Share Website Via:</h3>
                        <p className="hover:text-blue-500 transition-colors duration-300">Facebook</p>
                        <p className="hover:text-pink-500 transition-colors duration-300">Instagram</p>
                        <p className="hover:text-blue-400 transition-colors duration-300">Twitter</p>
                    </div>
                </div>
                
                <hr className="my-6 border-gray-600" />
                
                <p className="text-center">&copy; 2023 P<span className="font-bold">O</span>TTER. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
