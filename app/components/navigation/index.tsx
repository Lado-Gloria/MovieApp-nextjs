'use client'

import React, { useState } from "react";
import Image from "next/image"; 

const Navigation: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>(""); 

    const handleSearch = () => {
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-gray-800 p-4 text-black">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src="/potter.png" alt="Logo" width={170} height={170} />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Search characters..."
                            className="px-3 py-2 rounded-lg mr-2"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
